(function(){
  const data = window.ENG_SOFT_DATA;
  if(!data) return;

  const $ = (selector, root=document) => root.querySelector(selector);
  let railController = null;

  function el(tag, attrs={}, children=[]){
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => {
      if(key === "class") node.className = value;
      else if(key === "dataset") Object.entries(value).forEach(([dataKey, dataValue]) => { node.dataset[dataKey] = dataValue; });
      else if(key === "hidden") node.hidden = Boolean(value);
      else node.setAttribute(key, value);
    });
    children.forEach(child => {
      if(child === null || child === undefined) return;
      node.append(child instanceof Node ? child : document.createTextNode(String(child)));
    });
    return node;
  }

  function svgEl(tag, attrs={}, children=[]){
    const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    children.forEach(child => {
      if(child === null || child === undefined) return;
      node.append(child instanceof Node ? child : document.createTextNode(String(child)));
    });
    return node;
  }

  function appendWrappedText(parent, text, x, y, width, lineHeight=17){
    const words = String(text).split(" ");
    const lines = [];
    let current = "";
    words.forEach(word => {
      const next = current ? `${current} ${word}` : word;
      if(next.length > Math.max(10, Math.floor(width / 7)) && current){
        lines.push(current);
        current = word;
      } else {
        current = next;
      }
    });
    if(current) lines.push(current);
    lines.forEach((line, index) => {
      parent.append(svgEl("tspan", {x, y: y + index * lineHeight}, [line]));
    });
  }

  function renderUseCaseDiagram(diagram){
    const panel = el("div", {class:"diagram-box"});
    panel.append(el("h4", {}, [diagram.title || "Diagrama de caso de uso desenhado"]));
    if(diagram.note) panel.append(el("p", {class:"diagram-note"}, [diagram.note]));

    const svg = svgEl("svg", {
      class:"usecase-svg",
      viewBox:"0 0 1000 620",
      role:"img",
      "aria-label": diagram.title || "Diagrama de caso de uso"
    });

    svg.append(svgEl("defs", {}, [
      svgEl("marker", {
        id:`arrow-${diagram.id}`,
        viewBox:"0 0 10 10",
        refX:"9",
        refY:"5",
        markerWidth:"7",
        markerHeight:"7",
        orient:"auto-start-reverse"
      }, [svgEl("path", {d:"M 0 0 L 10 5 L 0 10 z", class:"diagram-arrow"})])
    ]));

    const boundary = diagram.boundary || {x:220, y:40, width:570, height:540};
    svg.append(svgEl("rect", {
      x:boundary.x,
      y:boundary.y,
      width:boundary.width,
      height:boundary.height,
      rx:"10",
      class:"system-boundary"
    }));
    svg.append(svgEl("text", {x:boundary.x + 18, y:boundary.y + 28, class:"system-title"}, [diagram.system]));

    const useCaseById = new Map();
    diagram.useCases.forEach(useCase => {
      useCaseById.set(useCase.id, useCase);
      svg.append(svgEl("ellipse", {
        cx:useCase.x,
        cy:useCase.y,
        rx:useCase.rx || 92,
        ry:useCase.ry || 34,
        class:"usecase-oval"
      }));
      const text = svgEl("text", {
        x:useCase.x,
        y:useCase.y - 6,
        class:"usecase-label",
        "text-anchor":"middle"
      });
      appendWrappedText(text, useCase.label, useCase.x, useCase.y - 6, (useCase.rx || 92) * 1.55, 15);
      svg.append(text);
    });

    const actorById = new Map();
    diagram.actors.forEach(actor => {
      actorById.set(actor.id, actor);
      const group = svgEl("g", {class:"actor-node"});
      group.append(svgEl("circle", {cx:actor.x, cy:actor.y - 34, r:"15", class:"actor-stroke"}));
      group.append(svgEl("line", {x1:actor.x, y1:actor.y - 19, x2:actor.x, y2:actor.y + 24, class:"actor-stroke"}));
      group.append(svgEl("line", {x1:actor.x - 29, y1:actor.y - 3, x2:actor.x + 29, y2:actor.y - 3, class:"actor-stroke"}));
      group.append(svgEl("line", {x1:actor.x, y1:actor.y + 24, x2:actor.x - 25, y2:actor.y + 62, class:"actor-stroke"}));
      group.append(svgEl("line", {x1:actor.x, y1:actor.y + 24, x2:actor.x + 25, y2:actor.y + 62, class:"actor-stroke"}));
      const label = svgEl("text", {x:actor.x, y:actor.y + 88, class:"actor-label", "text-anchor":"middle"});
      appendWrappedText(label, actor.name, actor.x, actor.y + 88, 120, 15);
      group.append(label);
      svg.append(group);
    });

    diagram.links.forEach(link => {
      const from = actorById.get(link.from) || useCaseById.get(link.from);
      const to = useCaseById.get(link.to) || actorById.get(link.to);
      if(!from || !to) return;
      const fromX = actorById.has(link.from) ? from.x + (from.x < to.x ? 32 : -32) : from.x;
      const fromY = actorById.has(link.from) ? from.y + 18 : from.y;
      const toX = useCaseById.has(link.to) ? to.x + (fromX < to.x ? -(to.rx || 92) : (to.rx || 92)) : to.x;
      const toY = to.y;
      const className = link.type === "include" ? "diagram-link include-link" : "diagram-link";
      svg.append(svgEl("line", {
        x1:fromX,
        y1:fromY,
        x2:toX,
        y2:toY,
        class:className,
        "marker-end": link.type === "include" ? `url(#arrow-${diagram.id})` : ""
      }));
      if(link.type){
        const midX = (fromX + toX) / 2;
        const midY = (fromY + toY) / 2 - 6;
        svg.append(svgEl("text", {x:midX, y:midY, class:"link-label", "text-anchor":"middle"}, [`<<${link.type}>>`]));
      }
    });

    panel.append(svg);
    if(diagram.caption) panel.append(el("p", {class:"diagram-caption"}, [diagram.caption]));
    return panel;
  }

  function sourceTag(source){
    if(source === "course"){
      return el("span", {class:"source-tag base"}, ["Atividade real do curso"]);
    }
    if(source === "support"){
      return el("span", {class:"source-tag base"}, ["Material de apoio enviado"]);
    }
    const isExtra = source === "extra";
    return el("span", {class:`source-tag ${isExtra ? "extra" : "base"}`}, [
      isExtra ? "Complemento fora do material base" : "Material base"
    ]);
  }

  function riskTag(){
    return el("span", {class:"source-tag risk"}, ["Pegadinha de prova"]);
  }

  function list(items, ordered=false){
    const node = el(ordered ? "ol" : "ul");
    items.forEach(item => node.append(el("li", {}, [item])));
    return node;
  }

  function appendTextBlock(parent, content){
    const paragraphs = Array.isArray(content) ? content : [content];
    paragraphs.filter(Boolean).forEach(paragraph => {
      parent.append(el("p", {}, [paragraph]));
    });
  }

  function lessonById(id){
    return data.lessons.find(lesson => lesson.id === id);
  }

  function lessonTitle(id){
    const lesson = lessonById(id);
    return lesson ? `Aula ${lesson.number}: ${lesson.title}` : id;
  }

  function basePrefix(){
    const path = location.pathname.replace(/\\/g, "/");
    return path.includes("/teoria/") || path.includes("/atividades/") || path.includes("/revisao/") ? "../" : "";
  }

  function initRailToggle(){
    const layout = $("[data-sidebar-layout]");
    const toggle = $("[data-sidebar-toggle]");
    if(!layout || !toggle) return;
    const rail = document.getElementById(toggle.getAttribute("aria-controls"));
    if(!rail) return;

    const storageKey = `${document.body.dataset.view || "site"}-rail-collapsed`;
    const isMobileRail = () => window.matchMedia("(max-width: 920px)").matches;
    const setCollapsed = collapsed => {
      layout.classList.toggle("rail-collapsed", collapsed);
      rail.classList.toggle("is-collapsed", collapsed);
      toggle.setAttribute("aria-expanded", String(!collapsed));
      toggle.setAttribute("title", collapsed ? "Expandir menu" : "Recolher menu");
      try {
        localStorage.setItem(storageKey, collapsed ? "1" : "0");
      } catch(error) {
        console.warn("Rail preference could not be saved.", error);
      }
    };

    let stored = null;
    try {
      stored = localStorage.getItem(storageKey);
    } catch(error) {
      console.warn("Rail preference could not be read.", error);
    }
    setCollapsed(stored === null ? isMobileRail() : stored === "1");
    toggle.addEventListener("click", () => setCollapsed(!rail.classList.contains("is-collapsed")));
    railController = {setCollapsed, isMobileRail};
  }

  function collapseRailOnMobile(){
    if(railController && railController.isMobileRail()) railController.setCollapsed(true);
  }

  function stat(value, label){
    return el("div", {class:"stat"}, [
      el("strong", {}, [value]),
      el("span", {}, [label])
    ]);
  }

  function renderHome(){
    const stats = $("#homeStats");
    const extraCount = data.lessons.reduce((sum, lesson) => (
      sum + lesson.sections.filter(section => section.source === "extra").length
    ), 0);
    stats.append(
      stat(data.lessons.length, "aulas/PDFs"),
      stat(data.questions.length, "questões objetivas"),
      stat(data.activities.length, "atividades reais"),
      stat(extraCount, "complementos marcados")
    );

    const prefix = basePrefix();
    const lessonGrid = $("#homeLessonGrid");
    data.lessons.forEach(lesson => {
      const hasExtra = lesson.sections.some(section => section.source === "extra");
      const card = el("a", {class:"lesson-card", href:`${prefix}teoria/index.html#${lesson.id}`});
      card.append(el("small", {}, [`Aula ${lesson.number} | ${lesson.sourcePdf}`]));
      card.append(el("h3", {}, [lesson.title]));
      card.append(el("p", {}, [lesson.summary]));
      const tags = el("div", {class:"tag-row"});
      tags.append(sourceTag("base"));
      if(hasExtra) tags.append(sourceTag("extra"));
      card.append(tags);
      lessonGrid.append(card);
    });

    const shallow = $("#homeShallowList");
    data.shallowNotes.forEach(note => {
      const card = el("a", {class:"issue-card", href:`${prefix}teoria/index.html#${note.lessonId}`});
      card.append(sourceTag("extra"));
      card.append(el("h3", {}, [note.title]));
      card.append(el("p", {}, [note.body]));
      shallow.append(card);
    });

    const comparison = $("#homeComparisonList");
    data.comparisons.slice(0, 4).forEach(item => {
      const card = el("article", {class:"comparison-card"});
      card.append(el("strong", {}, [item.title]));
      card.append(el("p", {}, [`${item.leftLabel}: ${item.left}`]));
      card.append(el("p", {}, [`${item.rightLabel}: ${item.right}`]));
      comparison.append(card);
    });
  }

  function lessonButtonLabel(lesson){
    return `Aula ${lesson.number}: ${lesson.title}`;
  }

  function renderTheory(){
    const tabs = $("#lessonTabs");
    const content = $("#lessonContent");

    const select = lessonId => {
      const lesson = lessonById(lessonId) || data.lessons[0];
      if(location.hash.replace("#", "") !== lesson.id) location.hash = lesson.id;
      Array.from(tabs.children).forEach(button => button.classList.toggle("active", button.dataset.lessonId === lesson.id));
      content.replaceChildren();

      const header = el("article", {class:"content-card"});
      const tagRow = el("div", {class:"tag-row"});
      tagRow.append(sourceTag("base"));
      if(lesson.sections.some(section => section.source === "extra")) tagRow.append(sourceTag("extra"));
      header.append(tagRow);
      header.append(el("span", {class:"source"}, [`Fonte principal: ${lesson.sourcePdf}`]));
      header.append(el("h2", {}, [`Aula ${lesson.number}: ${lesson.title}`]));
      header.append(el("p", {}, [lesson.summary]));

      const meta = el("div", {class:"lesson-meta"});
      const focus = el("div", {class:"note-panel"});
      focus.append(el("h3", {}, ["O que revisar para prova"]));
      focus.append(list(lesson.examFocus));
      const pitfalls = el("div", {class:"note-panel risk"});
      const pitfallHead = el("div", {class:"tag-row"});
      pitfallHead.append(riskTag());
      pitfalls.append(pitfallHead);
      pitfalls.append(el("h3", {}, ["Erros comuns"]));
      pitfalls.append(list(lesson.pitfalls));
      meta.append(focus, pitfalls);
      header.append(meta);
      content.append(header);

      lesson.sections.forEach(section => {
        const block = el("article", {class:"content-card section-block"});
        block.append(sourceTag(section.source));
        block.append(el("h3", {}, [section.heading]));
        appendTextBlock(block, section.body);
        if(section.details && section.details.length){
          block.append(list(section.details));
        }
        if(section.example || section.application){
          const conceptGrid = el("div", {class:"concept-grid"});
          if(section.example){
            conceptGrid.append(el("div", {class:"concept-note"}, [
              el("strong", {}, ["Exemplo"]),
              el("p", {}, [section.example])
            ]));
          }
          if(section.application){
            conceptGrid.append(el("div", {class:"concept-note"}, [
              el("strong", {}, ["Uso/aplicação"]),
              el("p", {}, [section.application])
            ]));
          }
          block.append(conceptGrid);
        }
        content.append(block);
      });
    };

    data.lessons.forEach(lesson => {
      const button = el("button", {type:"button", dataset:{lessonId:lesson.id}}, [lessonButtonLabel(lesson)]);
      button.addEventListener("click", () => {
        select(lesson.id);
        collapseRailOnMobile();
      });
      tabs.append(button);
    });

    select(location.hash.replace("#", "") || data.lessons[0].id);
    window.addEventListener("hashchange", () => select(location.hash.replace("#", "")));
  }

  function activityMatches(activity, filter){
    return filter === "todas" || activity.lessonIds.includes(filter);
  }

  function renderActivities(){
    const filters = $("#activityFilters");
    const listNode = $("#activityList");
    const lessonIds = [...new Set(data.activities.flatMap(activity => activity.lessonIds))];

    const render = filter => {
      Array.from(filters.children).forEach(button => button.classList.toggle("active", button.dataset.filter === filter));
      listNode.replaceChildren();
      data.activities.filter(activity => activityMatches(activity, filter)).forEach(activity => {
        const card = el("article", {class:"activity-card", id:activity.id});
        const head = el("div", {class:"activity-head"});
        const titleBlock = el("div");
        titleBlock.append(sourceTag(activity.source));
        titleBlock.append(el("h2", {}, [activity.title]));
        titleBlock.append(el("p", {}, [activity.prompt]));
        titleBlock.append(el("p", {class:"meta-line"}, [activity.basedOn]));
        head.append(titleBlock);
        const linkedLessons = el("div", {class:"tag-row"});
        activity.lessonIds.forEach(id => linkedLessons.append(el("span", {class:"source-tag base"}, [lessonTitle(id)])));
        head.append(linkedLessons);
        card.append(head);

        const grid = el("div", {class:"activity-grid"});
        const tasks = el("div", {class:"deliverable-box"});
        tasks.append(el("h4", {}, [activity.tasksTitle || "Atividade"]));
        tasks.append(list(activity.tasks, true));
        const deliverables = el("div", {class:"deliverable-box"});
        deliverables.append(el("h4", {}, [activity.deliverableTitle || "Roteiro de estudo e entrega externa"]));
        deliverables.append(list(activity.deliverables));
        const evaluation = el("div", {class:"deliverable-box"});
        evaluation.append(el("h4", {}, [activity.evaluationTitle || "Como saber se está correto"]));
        evaluation.append(list(activity.evaluation));
        grid.append(tasks, deliverables);
        card.append(grid, evaluation);

        if(activity.diagram) {
          card.append(renderUseCaseDiagram(activity.diagram));
        }

        const example = el("div", {class:"example-box"});
        example.append(el("h4", {}, [activity.exampleTitle]));
        example.append(el("pre", {}, [activity.example.join("\n")]));
        card.append(example);
        listNode.append(card);
      });
    };

    const all = el("button", {type:"button", dataset:{filter:"todas"}}, ["Todas"]);
    all.addEventListener("click", () => {
      location.hash = "todas";
      render("todas");
      collapseRailOnMobile();
    });
    filters.append(all);
    lessonIds.forEach(id => {
      const lesson = lessonById(id);
      if(!lesson) return;
      const button = el("button", {type:"button", dataset:{filter:id}}, [`Aula ${lesson.number}`]);
      button.addEventListener("click", () => {
        location.hash = id;
        render(id);
        collapseRailOnMobile();
      });
      filters.append(button);
    });

    const initial = location.hash.replace("#", "") || "todas";
    render(lessonIds.includes(initial) ? initial : "todas");
    window.addEventListener("hashchange", () => {
      const next = location.hash.replace("#", "") || "todas";
      render(lessonIds.includes(next) ? next : "todas");
    });
  }

  function questionMatches(question, filter){
    return filter === "todas" || question.lessonId === filter;
  }

  function renderQuestion(question){
    const card = el("article", {class:"question-card"});
    const tags = el("div", {class:"tag-row"});
    tags.append(sourceTag(question.source));
    tags.append(el("span", {class:"source-tag base"}, [lessonTitle(question.lessonId)]));
    card.append(tags);
    card.append(el("h3", {}, [question.prompt]));

    const options = el("div", {class:"question-options"});
    const feedback = el("div", {class:"answer-feedback", hidden:true});
    question.options.forEach((option, index) => {
      const button = el("button", {type:"button", class:"question-option"}, [`${String.fromCharCode(65 + index)}. ${option}`]);
      button.addEventListener("click", () => {
        Array.from(options.children).forEach((child, childIndex) => {
          child.classList.toggle("correct", childIndex === question.answerIndex);
          child.classList.toggle("wrong", childIndex === index && childIndex !== question.answerIndex);
        });
        feedback.hidden = false;
        feedback.replaceChildren(`${index === question.answerIndex ? "Correto." : "Incorreto."} ${question.explanation}`);
      });
      options.append(button);
    });
    card.append(options, feedback);
    return card;
  }

  function renderReview(){
    const filters = $("#reviewFilters");
    const listNode = $("#questionList");
    const reset = $("#resetAnswers");

    const render = filter => {
      Array.from(filters.children).forEach(button => button.classList.toggle("active", button.dataset.filter === filter));
      listNode.replaceChildren();
      data.questions.filter(question => questionMatches(question, filter)).forEach(question => {
        listNode.append(renderQuestion(question));
      });
    };

    const all = el("button", {type:"button", dataset:{filter:"todas"}}, ["Todas"]);
    all.addEventListener("click", () => {
      location.hash = "todas";
      render("todas");
      collapseRailOnMobile();
    });
    filters.append(all);
    data.lessons.forEach(lesson => {
      const button = el("button", {type:"button", dataset:{filter:lesson.id}}, [`Aula ${lesson.number}`]);
      button.addEventListener("click", () => {
        location.hash = lesson.id;
        render(lesson.id);
        collapseRailOnMobile();
      });
      filters.append(button);
    });

    reset.addEventListener("click", () => {
      listNode.querySelectorAll(".question-option").forEach(option => option.classList.remove("correct", "wrong"));
      listNode.querySelectorAll(".answer-feedback").forEach(feedback => {
        feedback.hidden = true;
        feedback.replaceChildren();
      });
    });

    const comparisonGrid = $("#comparisonGrid");
    data.comparisons.forEach(item => {
      const card = el("article", {class:"comparison-card"});
      card.append(sourceTag(item.source));
      card.append(el("h3", {}, [item.title]));
      const columns = el("div", {class:"comparison-columns"});
      const left = el("div");
      left.append(el("h4", {}, [item.leftLabel]));
      left.append(el("p", {}, [item.left]));
      const right = el("div");
      right.append(el("h4", {}, [item.rightLabel]));
      right.append(el("p", {}, [item.right]));
      columns.append(left, right);
      card.append(columns);
      comparisonGrid.append(card);
    });

    const flashcards = $("#flashcardGrid");
    data.flashcards.forEach(item => {
      const card = el("button", {type:"button", class:"flashcard"});
      card.append(el("strong", {}, ["Pergunta"]));
      card.append(el("p", {class:"question"}, [item.prompt]));
      card.append(el("p", {class:"answer"}, [item.answer]));
      card.addEventListener("click", () => card.classList.toggle("is-open"));
      flashcards.append(card);
    });

    const initial = location.hash.replace("#", "") || "todas";
    render(data.lessons.some(lesson => lesson.id === initial) ? initial : "todas");
    window.addEventListener("hashchange", () => {
      const next = location.hash.replace("#", "") || "todas";
      render(data.lessons.some(lesson => lesson.id === next) ? next : "todas");
    });
  }

  initRailToggle();
  const view = document.body.dataset.view;
  if(view === "home") renderHome();
  if(view === "theory") renderTheory();
  if(view === "activities") renderActivities();
  if(view === "review") renderReview();
})();
