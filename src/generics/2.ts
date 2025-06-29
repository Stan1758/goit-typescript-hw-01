type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

//* JS
// function compare (top, bottom): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   }
// }

//* TS
function compare<
  TTop extends Pick<AllType, "name" | "color">,
  TBottom extends Pick<AllType, "position" | "weight">
    >
    (top: TTop, bottom: TBottom): AllType;
{
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,,
  };
}
