const switchButtons = document.querySelectorAll('.switch-btn');
const panels = document.querySelectorAll('.demo-panel');

switchButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;

    switchButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle('active', isActive);
      panel.hidden = !isActive;
    });
  });
});

const presentationButton = document.getElementById('presentationBtn');
presentationButton.addEventListener('click', async () => {
  document.body.classList.toggle('presentation-mode');

  if (!document.fullscreenElement) {
    try {
      await document.documentElement.requestFullscreen();
      presentationButton.innerHTML = '<span>⛶</span> Sair da apresentação';
    } catch (error) {
      presentationButton.innerHTML = '<span>⛶</span> Modo apresentação';
    }
  } else {
    await document.exitFullscreen();
  }
});

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    document.body.classList.remove('presentation-mode');
    presentationButton.innerHTML = '<span>⛶</span> Modo apresentação';
  }
});
