export default function (category: string): string {
    return `${category.substring(0, 3)}-${new Date().getTime().toString()}`;
}