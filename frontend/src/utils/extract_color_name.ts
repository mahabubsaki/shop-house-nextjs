import { GetColorName } from 'hex-color-to-color-name';
export function hexToColorName(hex: string) {
    return GetColorName(hex);
}