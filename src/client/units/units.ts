export class Unit {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  init() { }
  response() { }
  render() { }
}

const unitList: Unit[] = [];

export function unitAdd(unit: Unit) {
  console.log("Unit created: " + unit.name);
  unitList.push(unit);
}

export async function unitsInit() {
  for (let i: number = 0; i < unitList.length; i++) {
    await unitList[i].init();
  }
}

export function unitsResponse() {
  for (let i: number = 0; i < unitList.length; i++) {
    unitList[i].response();
  }
}

export function unitsRender() {
  for (let i: number = 0; i < unitList.length; i++) {
    unitList[i].render();
  }
}