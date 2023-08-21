window.onload = () => {
    setTimeout(() => {
      window.scroll({ top: 100, behavior: "smooth" });
      setTimeout(() => {
        window.scroll({ top: 0, behavior: "smooth" });
      }, 850);
    }, 1000);
};
