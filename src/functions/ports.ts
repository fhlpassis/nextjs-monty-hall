import PortModel from '../model/port';

export function createPorts(qtd: number, portWithGift:number): PortModel[] {
  return Array.from({length: qtd}, (_, i) => {
    const num = i + 1;
    const hasGift = num === portWithGift;
    return new PortModel(num, hasGift);
  });
}

export function updatePorts(ports: PortModel[], modifiedPort: PortModel): PortModel[] {
  return ports.map(actualPort => {
    const sameAsModified = actualPort.number === modifiedPort.number;

    if (sameAsModified) {
      return modifiedPort;
    } else {
      return modifiedPort.open ? actualPort : actualPort.markOff();
    }
  })
}