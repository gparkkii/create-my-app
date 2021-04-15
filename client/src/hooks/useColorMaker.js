export const useColorMaker = hasedEmail => {
  if (hasedEmail) {
    const matches = hasedEmail.match(/.{2}/g);

    const [red, green, blue] = matches.map(hex => parseInt(hex, 16));

    const BlankBg = `rgb(${[red, green, blue]})`;

    const luminance = (red * 0.299 + green * 0.587 + blue * 0.114) / 255;

    const BlankColor = luminance > 0.6 ? '#222' : '#fff';

    return [BlankBg, BlankColor];
  }
  const BlankBg = '#fff';
  const BlankColor = '#222';
  return [BlankBg, BlankColor];
};

export default useColorMaker;
