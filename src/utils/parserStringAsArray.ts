export default function parseStringAsArray(arrayAsString) {
    return  arrayAsString.split(",")
    .map((tech: any) => tech.trim())   
}