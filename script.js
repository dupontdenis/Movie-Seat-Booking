const seance = [{ place: 6 }];

const theatre = document.getElementById("theatre"),
  seats = document.querySelectorAll(".seat"),
  confirmReza = document.querySelector(".legend");

// Update selected seats
function updateSelected() {
  const selectedSeats = document.querySelectorAll(".seat.selected");
  for (let seat of [...selectedSeats]) {
    seance.push({ place: [...seats].indexOf(seat) });
  }

  populateUI();
}

// Get data from LS and populate UI
function populateUI() {
  // get selected seats from LS

  //const selectedSeats = faire un map
  const selectedSeats = seance.map(({ place }) => place);

  // check if LS not empty
  if (selectedSeats !== null && selectedSeats.length > 0) {
    // get all unocuppied seats and loop through them
    seats.forEach((seat, index) => {
      // check if the seat is in LS
      if (selectedSeats.includes(index)) {
        seat.classList.add("occupied");
      }
    });
  }
}

// EVENT LISTENERS

// Seat selecting
theatre.addEventListener("click", (eventObject) => {
  // if target is seat and not occupied
  if (
    eventObject.target.classList.contains("seat") &&
    !eventObject.target.classList.contains("occupied")
  ) {
    // toggle class "selected"
    eventObject.target.classList.toggle("selected");
    // update
  }
});

confirmReza.addEventListener("click", () => {
  updateSelected();
});

// initial run
populateUI();
