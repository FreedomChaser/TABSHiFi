document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");

    const searchResults = document.getElementById("searchResults");

 

    const archiveData = [

      {

        title: "🎨 Website Redesign",

        keywords: ["client brief", "moodboard", "launch assets"],

        confidence: 83

      },

      {

        title: "📊 Data Cleanup",

        keywords: ["CSV", "cleaning script", "automation"],

        confidence: 62

      },

      {

        title: "📝 Writing Project",

        keywords: ["outline", "onboarding flow", "draft"],

        confidence: 91

      }

    ];

 

    searchInput.addEventListener("input", () => {

      const query = searchInput.value.toLowerCase();

      searchResults.innerHTML = "";

 

      const matches = archiveData.filter(project =>

        project.keywords.some(keyword => keyword.includes(query))

      );

 

      if (matches.length === 0 && query.length > 0) {

        searchResults.innerHTML = "<p>No strong matches, but we’ll keep looking…</p>";

      } else {

        matches.forEach(project => {

          const div = document.createElement("div");

          div.classList.add("result-item");

          div.innerHTML = `

            <strong>${project.title}</strong>

            <p>Match Confidence: ${project.confidence}%</p>

          `;

          searchResults.appendChild(div);

        });

      }

    });

  });