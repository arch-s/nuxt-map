import type { Coordinate } from '~/types/coordinate';

export function getCoordinateId({ latitude, longitude }: Coordinate): string {
  return `${latitude}${longitude}`;
}

export function getCoordinateAsArray({ latitude, longitude }: Coordinate): Array<number> {
  return [longitude, latitude];
}
