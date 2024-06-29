function skillsMember() {
  var member = document.querySelector(".member");
  var memberSkills = document.querySelector(".member-skills");
  var memberSkillsList = document.querySelector(".member-skills-list");
  var memberSkillsClose = document.querySelector(".member-skills-close");

  member.addEventListener("click", function() {
    memberSkills.classList.add("active");
  });

  memberSkillsClose.addEventListener("click", function() {
    memberSkills.classList.remove("active");
  });
}

