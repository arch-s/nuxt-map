import type { Coordinate } from '~/types/coordinate';

export interface MapLocation {
  coordinates: Coordinate;
  name: string;
  description: string;
  rating: number;
}
