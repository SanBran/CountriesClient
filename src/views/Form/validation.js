const validate = (input) => {
  let errors = {};

  if (!input.name) {
    errors.name = "Please write a name.";
  }

  if (input.name.length > 30) {
    errors.name = `The name of the activity can't exceed 30 characters.`;
  }

  if (!input.difficulty) {
    errors.difficulty = "Please indicate the difficulty.";
  }

  if (input.difficulty < 0 || input.difficulty > 5) {
    errors.difficulty = "Difficulty must be a number between 0 and 5.";
  }

  if (!input.duration) {
    errors.duration = "Please enter the duration.";
  }
  if (input.season.length === 0) {
    errors.season = "Please choose at least one season.";
  }

  if (input.countries.length === 0) {
    errors.countries = "Please choose at least one country.";
  }

  return errors;
};

export default validate;
