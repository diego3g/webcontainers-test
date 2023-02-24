import { test, expect } from 'vitest'
import { extractCodeDeps } from './extract-code-deps'

test('can be extract code deps', () => {

    const code = [
        `import 'isomorphic-fetch';`,
        `import chalk from 'chalk';`,
        `import z from 'zod';`,
        `import * as lodash from 'lodash';`,
        `import { Fragment } from 'react';`,
    ].join('/n')

    const extractedCodeDeps = extractCodeDeps(code)
  
    expect(typeof extractedCodeDeps).toEqual('string')
    expect(extractedCodeDeps).toEqual(
        `{"isomorphic-fetch":"latest","chalk":"latest","zod":"latest","lodash":"latest","react":"latest"}`
    )
})