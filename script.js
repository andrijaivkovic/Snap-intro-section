const navigation = document.querySelector(".navigation__links-box");
const navigationBackground = document.querySelector(".navigation__background");
const hamburgerButton = document.querySelector(".navigation__hamburger-box");

navigation.addEventListener("click", (e) => {
  const navigationLink = e.target.closest(".navigation__link-box");

  if (!navigationLink) return;

  const dropdownMenu = navigationLink
    .closest(".navigation__links-list-item")
    .querySelector(".navigation__dropdown-box");
  const navigationLinkIcon = navigationLink.querySelector(
    ".navigation__link-icon"
  );

  if (!dropdownMenu && !navigationLinkIcon) return;

  e.preventDefault();

  navigationLinkIcon.classList.toggle("rotate180");

  dropdownMenu.dataset.visible =
    dropdownMenu.dataset.visible === "false" ? "true" : "false";
});

hamburgerButton.addEventListener("click", (e) => {
  const navigation = document.querySelector(".navigation__background");
  const navigationBackground = document.querySelector(".navigation__links-box");

  navigation.dataset.visible =
    navigation.dataset.visible === "false" ? "true" : "false";
  navigationBackground.dataset.visible =
    navigationBackground.dataset.visible === "false" ? "true" : "false";
});

navigationBackground.addEventListener("click", function () {
  const navigation = document.querySelector(".navigation__background");
  const navigationBackground = document.querySelector(".navigation__links-box");

  navigation.dataset.visible = navigation.dataset.visible === "false";
  navigationBackground.dataset.visible =
    navigationBackground.dataset.visible === "false";
});
