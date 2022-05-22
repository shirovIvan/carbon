// "use strict";
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("app.js");
    /*-------LOGIN.VAL-----*/

    /*--------------------*/
  function tooggleActive(el) {
    if (!document.getElementsByClassName(el)) return;

    const collect = document.getElementsByClassName(el);

    for (let itm of collect) {
      let targ = document.querySelector(itm.dataset.target);

      itm.addEventListener("click", (e) => {
        e.preventDefault();
        itm.classList.toggle("active");
        targ.classList.toggle("active");
        addModifier(".aside");
      });
    }
  }
  tooggleActive("js-burger");
  const selected = document.querySelector(".selected");
  const optionsContainer = document.querySelector(".options-container");
  
  const optionsList = document.querySelectorAll(".option");
  
  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });
  optionsList.forEach(o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
  function checkElementActive(selector) {
    return document.querySelector(selector).classList.contains("active");
  }

  function addModifier(selector) {
    let modifier = selector.split("").slice(1).join("");

    if (checkElementActive(selector)) {
      document.documentElement.classList.add(`${modifier}-active`);
      document.body.classList.add(`${modifier}-active`);
    } else {
      document.documentElement.classList.remove(`${modifier}-active`);
      document.body.classList.remove(`${modifier}-active`);
    }
  }

  if (document.body.classList.contains(`body_login`)) {
    document.documentElement.classList.add(`html_login`);
  }
  if (document.body.classList.contains(`body_index`)) {
    document.documentElement.classList.add(`html_index`);
  }

  function dropdown(el) {
    if (!document.querySelector(el)) return;

    const collect = document.querySelectorAll(el);

    for (let itm of collect) {
      itm.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("active");
      });
    }

    window.addEventListener("click", (e) => {
      if (!e.target.closest(el)) {
        for (let itm of collect) {
          if (itm.classList.contains("active")) {
            itm.classList.remove("active");
          }
        }
      }
    });
  }
  dropdown(".js-dropdown");

  function togglePassVisiblity(el) {
    if (!document.querySelector(el)) return;

    const collect = document.querySelectorAll(el);

    for (let itm of collect) {
      let targ = document.querySelector(itm.dataset.target);

      itm.addEventListener("click", (e) => {
        e.preventDefault();

        if (targ.type == "password") {
          targ.type = "text";
          e.currentTarget.classList.add("active");
        } else {
          targ.type = "password";
          e.currentTarget.classList.remove("active");
        }
      });
    }
  }
  togglePassVisiblity(".js-toggle-pass");

  function toggleCheckbox(el) {
    if (!document.querySelector(el)) return;
    const collect = document.querySelectorAll(el);

    for (let itm of collect) {
      itm.addEventListener("keypress", (e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
          e.currentTarget.checked = !e.currentTarget.checked;
        }
      });
    }
  }
  toggleCheckbox(".js-keypress-check");

  function tabs(tab, targ) {
    if (!document.querySelector(tab) || !document.querySelector(targ)) return;

    const links = document.querySelectorAll(tab);
    const targets = document.querySelectorAll(targ);

    for (let link of links) {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        let targ = link.dataset.target;

        for (let link of links) {
          link.classList.remove("active");
        }
        for (let targ of targets) {
          targ.classList.remove("active");
        }
        for (let tg of document.querySelectorAll(targ)) {
          tg.classList.add("active");
        }
        e.currentTarget.classList.add("active");
      });
    }
  }
  tabs(".js-tab", ".js-tab-content");

  function tooggleVisible(el) {
    if (!document.getElementsByClassName(el)) return;

    const collect = document.getElementsByClassName(el);

    for (let itm of collect) {
      let hideEls = document.querySelectorAll(itm.dataset.hide),
        showEls = document.querySelectorAll(itm.dataset.show);

      itm.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("qw");
        for (let elem of hideEls) {
          elem.classList.add("hidden");
        }
        for (let elem of showEls) {
          elem.classList.remove("hidden");
        }
      });
    }
  }
  tooggleVisible("js-toggle-visible");

  function openModal(el) {
    if (!document.querySelector(el)) return;

    const collect = document.querySelectorAll(el);

    for (let elem of collect) {
      let targ = elem.dataset.modalContent;
      let targModal = document.querySelector(targ);
      let close = targModal.querySelector(".js-modal-close");

      const modal = new tingle.modal({
        cssClass: ["tingle-modal_custom"],
        onOpen: function () {
          console.log("modal opened");
        },
        onClose: function () {
          console.log("modal closed");
        },
      });
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        modal.setContent(targModal);
        modal.open();
      });

      close.addEventListener("click", (e) => {
        e.preventDefault();
        modal.close();
      });
    }
  }
  openModal("[data-modal-content]");

  $(".js-select").select2({
    minimumResultsForSearch: Infinity,
    selectionCssClass: "select_custom",
    dropdownCssClass: "select_custom",
    // allowClear: true,
  });
  $(".js-select-search").select2({
    selectionCssClass: "select_custom",
    dropdownCssClass: "select_custom",
    // allowClear: true,
  });

  tippy("[data-tippy-content]", {
    placement: "right",
    arrow: false,
    theme: "tooltip",
  });

  tippy(".js-filtration", {
    placement: "bottom",
    arrow: false,
    trigger: "click",
    interactive: true,
    theme: "filtration",

    content(elem) {
      const template = elem.nextElementSibling;
      return template.innerHTML;
    },
    allowHTML: true,
    onShow(elem) {
      console.log("tooltip opened");
    },
    onHide(elem) {
      console.log("tooltip closed");
    },
  });

  flatpickr(".js-datepicker", {
    locale: "ru",
  });
  function onMonthOrYearChange(dObj, dStr, fp) {
    fp.setDate(new Date(fp.currentYear, fp.currentMonth));
  }
  flatpickr(".js-monthpicker", {
    locale: "ru",
    onReady(_, __, fp) {
      fp.calendarContainer.classList.add("no-days");
    },
    onYearChange: [onMonthOrYearChange],
    onMonthChange: [onMonthOrYearChange],
  });

  function scheme(el) {
    if (!document.querySelector(el)) return;
    let chart;
    d3.csv(
      "assets/upload/structure.csv"
      // "https://msadminecopass.bitbucket.io/build/assets/upload/structure.csv"
    ).then((dataFlattened) => {
      chart = new d3.OrgChart()
        .container(el)
        .data(dataFlattened)
        .nodeWidth((d) => 330)
        .initialZoom(1)
        .nodeHeight((d) => 140)
        .childrenMargin((d) => 40)
        .compactMarginBetween((d) => 15)
        .compactMarginPair((d) => 80)
        .nodeContent(function (d, i, arr, state) {
          let txtMarkerA = "";
          let txtMarkerM = "";
          let txtMarkerO = "";

          if (d.data.positionAdmin.length > 0) {
            txtMarkerA = `<div class="txt-marker txt-marker_type-1"> ${d.data.positionAdmin} </div>`;
          }

          if (d.data.positionManager.length > 0) {
            txtMarkerM = `<div class="txt-marker txt-marker_type-2"> ${d.data.positionManager} </div>`;
          }

          if (d.data.positionOperator.length > 0) {
            txtMarkerO = `<div class="txt-marker txt-marker_type-3"> ${d.data.positionOperator} </div>`;
          }

          return `
            <div class="scheme-block">
              <div class="scheme-block__title"> ${d.data.name} </div>
  
              <div class="scheme-block__bar"> 
                <div class="scheme-block__bar-itm">
                  <div class="scheme-block__txt-marker">
                    ${txtMarkerA}
                    ${txtMarkerM}
                    ${txtMarkerO}
                  </div>
                </div>
                <div class="scheme-block__bar-itm">
                  <div class="clr-marker clr-marker_${d.data.markerType}"></div>
                  <div class="scheme-block__add js-add-element">+</div>
                </div>
              </div>
            </div>
          `;
        })
        .render();
      if (document.querySelector(".scheme__zoom")) {
        document.querySelector(".scheme__zoom").classList.add("active");
      }
    });

    if (document.querySelector(".js-cheme-zoom-in")) {
      document
        .querySelector(".js-cheme-zoom-in")
        .addEventListener("click", (e) => chart.zoomIn());
    }
    if (document.querySelector(".js-cheme-zoom-out")) {
      document
        .querySelector(".js-cheme-zoom-out")
        .addEventListener("click", (e) => chart.zoomOut());
    }
  }
  scheme(".js-scheme");

  tippy(".js-scheme-tippy", {
    placement: "bottom",
    arrow: false,
    trigger: "click",
    interactive: true,
    theme: "scheme",

    content(elem) {
      const template = elem.nextElementSibling;
      return template.innerHTML;
    },
    allowHTML: true,
  });

  window.addEventListener("click", (e) => {
    if (e.target.matches(".js-add-element")) {
      document.querySelector(".js-scheme-tippy")._tippy.show();
    }
  });

  function schemeReport(el) {
    if (!document.querySelector(el)) return;
    let chart;
    d3.csv("assets/upload/structure_report.csv").then((dataFlattened) => {
      chart = new d3.OrgChart()
        .container(el)
        .data(dataFlattened)
        .nodeWidth((d) => 430)
        .initialZoom(1)
        .nodeHeight((d) => 160)
        .childrenMargin((d) => 40)
        .compactMarginBetween((d) => 15)
        .compactMarginPair((d) => 80)
        .nodeContent(function (d, i, arr, state) {
          return `
              <div class="scheme-block">
                <div class="scheme-block__content"> 
                  <div class="scheme-block__content-itm">
                    <div class="scheme-block__title"> ${d.data.name} </div>
                    <div class="scheme-block__val">
                      ${d.data.value}
                      <div class="scheme-block__val-descr">${d.data.valueDescr}</div>
                    </div>
                  </div>

                  <div class="scheme-block__content-itm">
                    <div class="scheme-block__graph"> сюда вставляй график </div>
                  </div>
                </div>
              </div>
            `;
        })
        .render();
      if (document.querySelector(".scheme__zoom")) {
        document.querySelector(".scheme__zoom").classList.add("active");
      }
    });

    if (document.querySelector(".js-cheme-zoom-in")) {
      document
        .querySelector(".js-cheme-zoom-in")
        .addEventListener("click", (e) => chart.zoomIn());
    }
    if (document.querySelector(".js-cheme-zoom-out")) {
      document
        .querySelector(".js-cheme-zoom-out")
        .addEventListener("click", (e) => chart.zoomOut());
    }
  }
  schemeReport(".js-scheme_report");

  Highcharts.setOptions({
    chart: {
      spacingTop: 10,
      spacingLeft: 0,
      spacingRight: 0,
      spacingBottom: 0,
      style: {
        fontFamily: "'Museo Sans Cyrl', Arial, Helvetica, sans- serif",
        color: "#21251f",
      },
    },

    title: {
      align: "left",
      color: "#21251f",
    },

    subtitle: {
      align: "left",
    },

    tooltip: {
      enabled: true,
    },

    legend: {
      enabled: false,
      itemStyle: {
        color: "#21251f",
      },
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      series: {
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
      },
    },
  });
  
});
