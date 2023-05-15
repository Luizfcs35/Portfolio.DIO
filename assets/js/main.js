function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerHTML = profileData.name;

  const job = document.getElementById("profile.job");
  job.innerHTML = profileData.job;

  const location = document.getElementById("profile.location");
  location.innerHTML = profileData.location;

  const phone = document.getElementById("profile.phone");
  phone.innerHTML = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
  const skillsoft = document.getElementById("softskills");
  skillsoft.innerHTML = profileData.skills.softSkills
    .map((softskills) => `<li>${softskills}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const skillhard = document.getElementById("hardSkills");
  skillhard.innerHTML = profileData.skills.hardSkills
    .map(
      (hardSkills) => `
    <li>
      <h3 class="title">${hardSkills.title}</h3>
      <div class="tools">
        <img src="${hardSkills.logo}" alt="${hardSkills.name}" />
        <div>
          <p class="period">${hardSkills.period}</p>
          <p class="tech">${hardSkills.tech}</p>
        </div>
      </div>
    </li>`
    )
    .join("");
}

function updateLanguages(profileData) {
  const langs = document.getElementById("languages");

  langs.innerHTML = profileData.languages
    .map((languages) => `<li>${languages}</li>`)
    .join("");
}

function updatePortfolio(profileData) {
  const portfolioProjects = document.getElementById("portfolio");
  portfolioProjects.innerHTML = profileData.portfolio
    .map((portfolio) => {      
      return `
            <li>
              <h3 ${portfolio.github ? 'class="github"' : ''}>
                ${portfolio.name}
              </h3>
              <a href="${portfolio.url}" target="_blank">${portfolio.domain}
              </a>
            </li> 
      `
    }).join("");
}

function updateExperience(profileData) {
  const experience = document.getElementById("experience");
  experience.innerHTML = profileData.professionalExperience
  .map((experience) => {
    return `
            <li>
              <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>
                 ${experience.description}
                </p>
            <li>`      
  }).join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
})();
