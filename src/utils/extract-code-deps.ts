// https://www.javainuse.com/rexgenerator

const extractCodeImports = /import (?:.* from )?('[a-zA-Z-]+')[;\n\b]/g
const extractCodeDependecies = /'([a-zA-z-]+)'/g

export function extractCodeDeps(code: string) {
    const codeImports = code.match(extractCodeImports)

    if (codeImports) {

        let codeDeps = codeImports.flatMap(
            (codeImport) => {
                const matches = codeImport.match(extractCodeDependecies)
                return matches || []
            }
        )

        codeDeps = codeDeps.map((dep) => dep.replace(/['"]/g, ''))

        const codeDepsAsJson = codeDeps.reduce((acc: Record<string, "latest">, dep: string) => {
            acc[dep] = "latest"
            return acc
        }, {})

        return JSON.stringify(codeDepsAsJson)
    }

    return ''
}
