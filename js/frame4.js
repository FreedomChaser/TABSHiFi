document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".layout-btn");

    const layouts = document.querySelectorAll(".split-screen");

 

    buttons.forEach((btn) => {

      btn.addEventListener("click", () => {

        const selected = btn.getAttribute("data-layout");

 

        // Update active button

        buttons.forEach((b) => b.classList.remove("active"));

        btn.classList.add("active");

 

        // Update layout visibility

        layouts.forEach((layout) => {

          if (layout.classList.contains(`layout-${selected}`)) {

            layout.classList.add("active-layout");

          } else {

            layout.classList.remove("active-layout");

          }

        });

      });

    });

  });