
function addNumbersToTheClock(): void {
    const clock: HTMLElement = document.querySelector(".clock-body")!;
    
	const centerX: number = clock.clientWidth / 2 - 10;
	const centerY: number = clock.clientHeight / 2 - 20;
	const radius = 0.4 * Math.min(clock.clientWidth, clock.clientHeight);

	const totalNumbers = 12;

	for (let i = 0; i < totalNumbers; i++) {
		const numberOfClock: HTMLElement = document.createElement("div");
		numberOfClock.classList.add("number");
		numberOfClock.textContent = i === 0 ? "12" : i.toString();

		const angle = (i * 360) / totalNumbers - 90;

		const coordinateX = centerX + radius * Math.cos((angle * Math.PI) / 180);
		const coordinateY = centerY + radius * Math.sin((angle * Math.PI) / 180);

		numberOfClock.style.left = `${coordinateX}px`;
		numberOfClock.style.top = `${coordinateY}px`;

		clock.append(numberOfClock);
	}
}

function refreshClock(): void {
    const clock: HTMLElement = document.querySelector(".clock-body")!;
    while (clock?.lastChild?.classList.contains('number')) {
        clock.lastChild.remove();
    }
	addNumbersToTheClock();
}

refreshClock()

addEventListener("resize", () => {
    refreshClock();
});
