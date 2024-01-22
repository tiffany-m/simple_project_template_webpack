// Test Module -----------------------------------------------------------------------
export function changeButton() {
  const btn = document.getElementById("test-button");

  btn.addEventListener("click", () => btn.classList.add("function-test"));
}
// -----------------------------------------------------------------------------
