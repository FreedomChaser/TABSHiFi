document.addEventListener("DOMContentLoaded", () => {

    const projects = document.querySelectorAll(".project");

    const workspace = document.getElementById("workspace");

    const overlay = document.getElementById("transition-overlay");

 

    projects.forEach(project => {

      project.addEventListener("click", () => {

        const newProject = project.getAttribute("data-project");

 

        overlay.classList.remove("hidden");

 

        setTimeout(() => {

          // Simulate workspace switch

          workspace.className = `workspace ${newProject}`;

          workspace.innerHTML = getWorkspaceContent(newProject);

          overlay.classList.add("hidden");

        }, 1500); // Delay to simulate "saving"

      });

    });

 

    function getWorkspaceContent(project) {

      switch (project) {

        case "project2":

          return `

            <h2>📊 Data Cleanup</h2>

            <p>Tabs: Raw Data | Cleaning Script | Output</p>

            <div class="split-screen">

              <div class="pane">🧹 Script Editor</div>

              <div class="pane">📈 Live Output</div>

            </div>`;

        case "project3":

          return `

            <h2>📝 Writing Project</h2>

            <p>Tabs: Outline | Draft | Edits</p>

            <div class="split-screen">

              <div class="pane">📄 Outline</div>

              <div class="pane">📄 Draft in Progress</div>

            </div>`;

        default:

          return `

            <h2>🎨 Website Redesign</h2>

            <p>Tabs: Client Brief | Moodboard | Dev Tools</p>

            <div class="split-screen">

              <div class="pane">📝 Notes</div>

              <div class="pane">🌐 Site Preview</div>

            </div>`;

      }

    }

  });