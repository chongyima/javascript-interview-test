const counter = {
  next: 1,
  tick() {
    setTimeout(() => {
      console.log(this.next);
    }, 1000);
    this.next++;
  }
};

counter.tick();
counter.tick();
counter.tick();
