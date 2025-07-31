
export const age = (planet, seconds) => {
    let result = seconds / 31557600;
    switch (planet) {
        case 'mercury': result /= 0.2408467; break;
        case 'venus': result /= 0.61519726; break;
        case 'mars': result /= 1.8808158; break;
        case 'jupiter': result /= 11.862615; break;
        case 'saturn': result /= 29.447498; break;
        case 'uranus': result /= 84.016846; break;
        case 'neptune': result /= 164.79132; break;
    }
    return Number(result.toFixed(2));
};
