# Studio Bridge — current integration source

Full application/configuration/test files for the shared classroom integration and free lesson browsing. See [CLASSROOM-INTEGRATION.md](CLASSROOM-INTEGRATION.md). Credentials and generated files are excluded.

## package.json

```json
{
  "name": "figma-make-app",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "format": "oxfmt",
    "test:classroom:setup": "node tests/create-test-class.mjs",
    "test:classroom": "node tests/shared-classroom.mjs"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.118.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@playwright/test": "^1.64.1",
    "@tailwindcss/vite": "^4.0.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^6.0.0",
    "oxfmt": "^0.2.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.0",
    "vite": "^8.0.5"
  }
}
```

## pnpm-lock.yaml

```yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@supabase/supabase-js':
        specifier: ^2.118.0
        version: 2.118.0
      react:
        specifier: ^19.0.0
        version: 19.2.4
      react-dom:
        specifier: ^19.0.0
        version: 19.2.4(react@19.2.4)
    devDependencies:
      '@playwright/test':
        specifier: ^1.64.1
        version: 1.64.1
      '@tailwindcss/vite':
        specifier: ^4.0.0
        version: 4.2.2(vite@8.0.5(@types/node@22.19.17)(jiti@2.6.1))
      '@types/node':
        specifier: ^22.0.0
        version: 22.19.17
      '@types/react':
        specifier: ^19.0.0
        version: 19.2.14
      '@types/react-dom':
        specifier: ^19.0.0
        version: 19.2.3(@types/react@19.2.14)
      '@vitejs/plugin-react':
        specifier: ^6.0.0
        version: 6.0.1(vite@8.0.5(@types/node@22.19.17)(jiti@2.6.1))
      oxfmt:
        specifier: ^0.2.0
        version: 0.2.0
      tailwindcss:
        specifier: ^4.0.0
        version: 4.2.2
      typescript:
        specifier: ^5.7.0
        version: 5.9.3
      vite:
        specifier: ^8.0.5
        version: 8.0.5(@types/node@22.19.17)(jiti@2.6.1)

packages:

  '@emnapi/core@1.9.1':
    resolution: {integrity: sha512-mukuNALVsoix/w1BJwFzwXBN/dHeejQtuVzcDsfOEsdpCumXb/E9j8w11h5S54tT1xhifGfbbSm/ICrObRb3KA==}

  '@emnapi/runtime@1.9.1':
    resolution: {integrity: sha512-VYi5+ZVLhpgK4hQ0TAjiQiZ6ol0oe4mBx7mVv7IflsiEp0OWoVsp/+f9Vc1hOhE0TtkORVrI1GvzyreqpgWtkA==}

  '@emnapi/wasi-threads@1.2.0':
    resolution: {integrity: sha512-N10dEJNSsUx41Z6pZsXU8FjPjpBEplgH24sfkmITrBED1/U2Esum9F3lfLrMjKHHjmi557zQn7kR9R+XWXu5Rg==}

  '@jridgewell/gen-mapping@0.3.13':
    resolution: {integrity: sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==}

  '@jridgewell/remapping@2.3.5':
    resolution: {integrity: sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/sourcemap-codec@1.5.5':
    resolution: {integrity: sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==}

  '@jridgewell/trace-mapping@0.3.31':
    resolution: {integrity: sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==}

  '@napi-rs/wasm-runtime@1.1.1':
    resolution: {integrity: sha512-p64ah1M1ld8xjWv3qbvFwHiFVWrq1yFvV4f7w+mzaqiR4IlSgkqhcRdHwsGgomwzBH51sRY4NEowLxnaBjcW/A==}

  '@oxc-project/types@0.122.0':
    resolution: {integrity: sha512-oLAl5kBpV4w69UtFZ9xqcmTi+GENWOcPF7FCrczTiBbmC0ibXxCwyvZGbO39rCVEuLGAZM84DH0pUIyyv/YJzA==}

  '@oxfmt/darwin-arm64@0.2.0':
    resolution: {integrity: sha512-NK7iEPqRovUvKac+4dn2ui8v5Y5q6UJ9v4z5Zjr5lmEzTlBwXToP3TwY75IAaCYeu0g8Es7ToJpS7qCQuxUhuA==}
    cpu: [arm64]
    os: [darwin]

  '@oxfmt/darwin-x64@0.2.0':
    resolution: {integrity: sha512-eXDgT+DbIMnA3sWE+w38rOvXaxkP4RvHi41rPpWb9XoRGbM+tOo0c8RYqCIX39n7PizOlbF/xUBh9nMhiW01wQ==}
    cpu: [x64]
    os: [darwin]

  '@oxfmt/linux-arm64-gnu@0.2.0':
    resolution: {integrity: sha512-h4mw9/Lck5X/SU1RPE26VraoBJgn9SOoLl8GnaYvtmRBFHK0v+2KpnBSwMWeiaIxCdJSsrVc9mpKSOcPsen7Cg==}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@oxfmt/linux-arm64-musl@0.2.0':
    resolution: {integrity: sha512-kDZ/kVCgh9kSczMH2gPXZs+rsY/VcCQ1BoQnND8D3v1Le91LceJ5s/a4XBBA3ADI3NiPdqNmK2ssaxY4BfgXDg==}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@oxfmt/linux-x64-gnu@0.2.0':
    resolution: {integrity: sha512-qvf6cNuf4z3yjzjSvg4Jwr88jDyeFaYPU+4dBWVr6fdWhAA+BIuIvurJWYQGvWNNSkobVWH3A7m+wp+h5fNsSg==}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@oxfmt/linux-x64-musl@0.2.0':
    resolution: {integrity: sha512-D0rw4BVLHEbtMB6p9e+Ph7Y/56oD1DRP4Qcbbv1B1w0kJanWBB3vMH+v2rqgeYsErqJOtLpYRkPFmJSU9In2HA==}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@oxfmt/win32-arm64@0.2.0':
    resolution: {integrity: sha512-QM0fP8YUvBNyuNa6d+jNonV34A6zGvvQ2mX93wnERpX25jIbFKljKiKDiWo2M1nUsW8zL2z4ESEeaLO9bx8djg==}
    cpu: [arm64]
    os: [win32]

  '@oxfmt/win32-x64@0.2.0':
    resolution: {integrity: sha512-WkFXliDbwFiziBSfvWXeM0Y3x07Kxxrl39kgsp+N3n5QgzsM8q6qe094+OW+hItDQ+9SSd2y9u231sMCsKxlog==}
    cpu: [x64]
    os: [win32]

  '@playwright/test@1.64.1':
    resolution: {integrity: sha512-IaYGml/nSOiZWROfPtuIL7neuu9qDOZ3TNvNljUIrhDMxiGTgPjzj/g9p9RxpS2tSepPDRY+UwAaEeiKtUvIAg==}
    engines: {node: '>=20'}
    hasBin: true

  '@rolldown/binding-android-arm64@1.0.0-rc.12':
    resolution: {integrity: sha512-pv1y2Fv0JybcykuiiD3qBOBdz6RteYojRFY1d+b95WVuzx211CRh+ytI/+9iVyWQ6koTh5dawe4S/yRfOFjgaA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [android]

  '@rolldown/binding-darwin-arm64@1.0.0-rc.12':
    resolution: {integrity: sha512-cFYr6zTG/3PXXF3pUO+umXxt1wkRK/0AYT8lDwuqvRC+LuKYWSAQAQZjCWDQpAH172ZV6ieYrNnFzVVcnSflAg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [darwin]

  '@rolldown/binding-darwin-x64@1.0.0-rc.12':
    resolution: {integrity: sha512-ZCsYknnHzeXYps0lGBz8JrF37GpE9bFVefrlmDrAQhOEi4IOIlcoU1+FwHEtyXGx2VkYAvhu7dyBf75EJQffBw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [darwin]

  '@rolldown/binding-freebsd-x64@1.0.0-rc.12':
    resolution: {integrity: sha512-dMLeprcVsyJsKolRXyoTH3NL6qtsT0Y2xeuEA8WQJquWFXkEC4bcu1rLZZSnZRMtAqwtrF/Ib9Ddtpa/Gkge9Q==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [freebsd]

  '@rolldown/binding-linux-arm-gnueabihf@1.0.0-rc.12':
    resolution: {integrity: sha512-YqWjAgGC/9M1lz3GR1r1rP79nMgo3mQiiA+Hfo+pvKFK1fAJ1bCi0ZQVh8noOqNacuY1qIcfyVfP6HoyBRZ85Q==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm]
    os: [linux]

  '@rolldown/binding-linux-arm64-gnu@1.0.0-rc.12':
    resolution: {integrity: sha512-/I5AS4cIroLpslsmzXfwbe5OmWvSsrFuEw3mwvbQ1kDxJ822hFHIx+vsN/TAzNVyepI/j/GSzrtCIwQPeKCLIg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-arm64-musl@1.0.0-rc.12':
    resolution: {integrity: sha512-V6/wZztnBqlx5hJQqNWwFdxIKN0m38p8Jas+VoSfgH54HSj9tKTt1dZvG6JRHcjh6D7TvrJPWFGaY9UBVOaWPw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@rolldown/binding-linux-ppc64-gnu@1.0.0-rc.12':
    resolution: {integrity: sha512-AP3E9BpcUYliZCxa3w5Kwj9OtEVDYK6sVoUzy4vTOJsjPOgdaJZKFmN4oOlX0Wp0RPV2ETfmIra9x1xuayFB7g==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [ppc64]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-s390x-gnu@1.0.0-rc.12':
    resolution: {integrity: sha512-nWwpvUSPkoFmZo0kQazZYOrT7J5DGOJ/+QHHzjvNlooDZED8oH82Yg67HvehPPLAg5fUff7TfWFHQS8IV1n3og==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [s390x]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-x64-gnu@1.0.0-rc.12':
    resolution: {integrity: sha512-RNrafz5bcwRy+O9e6P8Z/OCAJW/A+qtBczIqVYwTs14pf4iV1/+eKEjdOUta93q2TsT/FI0XYDP3TCky38LMAg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-x64-musl@1.0.0-rc.12':
    resolution: {integrity: sha512-Jpw/0iwoKWx3LJ2rc1yjFrj+T7iHZn2JDg1Yny1ma0luviFS4mhAIcd1LFNxK3EYu3DHWCps0ydXQ5i/rrJ2ig==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@rolldown/binding-openharmony-arm64@1.0.0-rc.12':
    resolution: {integrity: sha512-vRugONE4yMfVn0+7lUKdKvN4D5YusEiPilaoO2sgUWpCvrncvWgPMzK00ZFFJuiPgLwgFNP5eSiUlv2tfc+lpA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [openharmony]

  '@rolldown/binding-wasm32-wasi@1.0.0-rc.12':
    resolution: {integrity: sha512-ykGiLr/6kkiHc0XnBfmFJuCjr5ZYKKofkx+chJWDjitX+KsJuAmrzWhwyOMSHzPhzOHOy7u9HlFoa5MoAOJ/Zg==}
    engines: {node: '>=14.0.0'}
    cpu: [wasm32]

  '@rolldown/binding-win32-arm64-msvc@1.0.0-rc.12':
    resolution: {integrity: sha512-5eOND4duWkwx1AzCxadcOrNeighiLwMInEADT0YM7xeEOOFcovWZCq8dadXgcRHSf3Ulh1kFo/qvzoFiCLOL1Q==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [win32]

  '@rolldown/binding-win32-x64-msvc@1.0.0-rc.12':
    resolution: {integrity: sha512-PyqoipaswDLAZtot351MLhrlrh6lcZPo2LSYE+VDxbVk24LVKAGOuE4hb8xZQmrPAuEtTZW8E6D2zc5EUZX4Lw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [win32]

  '@rolldown/pluginutils@1.0.0-rc.12':
    resolution: {integrity: sha512-HHMwmarRKvoFsJorqYlFeFRzXZqCt2ETQlEDOb9aqssrnVBB1/+xgTGtuTrIk5vzLNX1MjMtTf7W9z3tsSbrxw==}

  '@rolldown/pluginutils@1.0.0-rc.7':
    resolution: {integrity: sha512-qujRfC8sFVInYSPPMLQByRh7zhwkGFS4+tyMQ83srV1qrxL4g8E2tyxVVyxd0+8QeBM1mIk9KbWxkegRr76XzA==}

  '@supabase/auth-js@2.118.0':
    resolution: {integrity: sha512-xWfPXyhS2KDSfAneMtI6p/tBnbdiz/5vaRKXEqUfzfC9WCniKr2Ds5o5G7RIGig0bom4z6wUY9zaV07WDVTfnQ==}
    engines: {node: '>=22.0.0'}

  '@supabase/functions-js@2.118.0':
    resolution: {integrity: sha512-4ofletPa/noKAU6KHeqsd3FztGzRPUEJRey1MKY0o+PIHaVePqRPShIXtl37gcVyIWaFM+zNg6r9zh0uUSFOSA==}
    engines: {node: '>=22.0.0'}

  '@supabase/phoenix@0.4.5':
    resolution: {integrity: sha512-aAn9H9ovVyeApKy11OWOrrOGq8DV68yWeH4ud2lN9fzn4aO8Zb5GLL9m1pUg9nLqIcT+ZDfAcsZe0E/nqdv2lw==}

  '@supabase/postgrest-js@2.118.0':
    resolution: {integrity: sha512-JXy+37KPApHsyotaQACovv/Jy9E22rfiWLRuT+2UjoEAcAIelDFIrsF/FY47Dy19mO7lI0Tq+zDCX8oJ2Ozfiw==}
    engines: {node: '>=22.0.0'}

  '@supabase/realtime-js@2.118.0':
    resolution: {integrity: sha512-pzCIEWjqD5/xqEZQerpt+q9rsgYkcrkgCJgf0W2ULqC4fYUeB/p9CFa3t9vn+IVh6dMN9r4ZCE262lZvUC+Bfw==}
    engines: {node: '>=22.0.0'}

  '@supabase/storage-js@2.118.0':
    resolution: {integrity: sha512-5MNkKt2Moy7Jud/sPX7/28BwdDxZMCVHGJT00b8op3KRa9LKSjOAYU5IcfGWIstaasAqY8GkbA6oI3IRDgB1YQ==}
    engines: {node: '>=22.0.0'}

  '@supabase/supabase-js@2.118.0':
    resolution: {integrity: sha512-FxI8UXMVC2UG7IkeiI8fuQZqq2oI3JeSuN8MPIC2RLVaoEAxKS0nqE6kii9Ewpq8f9gNPM6git1Y8f0vN/QLFw==}
    engines: {node: '>=22.0.0'}
    peerDependencies:
      '@opentelemetry/api': '>=1.0.0'
    peerDependenciesMeta:
      '@opentelemetry/api':
        optional: true

  '@tailwindcss/node@4.2.2':
    resolution: {integrity: sha512-pXS+wJ2gZpVXqFaUEjojq7jzMpTGf8rU6ipJz5ovJV6PUGmlJ+jvIwGrzdHdQ80Sg+wmQxUFuoW1UAAwHNEdFA==}

  '@tailwindcss/oxide-android-arm64@4.2.2':
    resolution: {integrity: sha512-dXGR1n+P3B6748jZO/SvHZq7qBOqqzQ+yFrXpoOWWALWndF9MoSKAT3Q0fYgAzYzGhxNYOoysRvYlpixRBBoDg==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [android]

  '@tailwindcss/oxide-darwin-arm64@4.2.2':
    resolution: {integrity: sha512-iq9Qjr6knfMpZHj55/37ouZeykwbDqF21gPFtfnhCCKGDcPI/21FKC9XdMO/XyBM7qKORx6UIhGgg6jLl7BZlg==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [darwin]

  '@tailwindcss/oxide-darwin-x64@4.2.2':
    resolution: {integrity: sha512-BlR+2c3nzc8f2G639LpL89YY4bdcIdUmiOOkv2GQv4/4M0vJlpXEa0JXNHhCHU7VWOKWT/CjqHdTP8aUuDJkuw==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [darwin]

  '@tailwindcss/oxide-freebsd-x64@4.2.2':
    resolution: {integrity: sha512-YUqUgrGMSu2CDO82hzlQ5qSb5xmx3RUrke/QgnoEx7KvmRJHQuZHZmZTLSuuHwFf0DJPybFMXMYf+WJdxHy/nQ==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [freebsd]

  '@tailwindcss/oxide-linux-arm-gnueabihf@4.2.2':
    resolution: {integrity: sha512-FPdhvsW6g06T9BWT0qTwiVZYE2WIFo2dY5aCSpjG/S/u1tby+wXoslXS0kl3/KXnULlLr1E3NPRRw0g7t2kgaQ==}
    engines: {node: '>= 20'}
    cpu: [arm]
    os: [linux]

  '@tailwindcss/oxide-linux-arm64-gnu@4.2.2':
    resolution: {integrity: sha512-4og1V+ftEPXGttOO7eCmW7VICmzzJWgMx+QXAJRAhjrSjumCwWqMfkDrNu1LXEQzNAwz28NCUpucgQPrR4S2yw==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@tailwindcss/oxide-linux-arm64-musl@4.2.2':
    resolution: {integrity: sha512-oCfG/mS+/+XRlwNjnsNLVwnMWYH7tn/kYPsNPh+JSOMlnt93mYNCKHYzylRhI51X+TbR+ufNhhKKzm6QkqX8ag==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@tailwindcss/oxide-linux-x64-gnu@4.2.2':
    resolution: {integrity: sha512-rTAGAkDgqbXHNp/xW0iugLVmX62wOp2PoE39BTCGKjv3Iocf6AFbRP/wZT/kuCxC9QBh9Pu8XPkv/zCZB2mcMg==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@tailwindcss/oxide-linux-x64-musl@4.2.2':
    resolution: {integrity: sha512-XW3t3qwbIwiSyRCggeO2zxe3KWaEbM0/kW9e8+0XpBgyKU4ATYzcVSMKteZJ1iukJ3HgHBjbg9P5YPRCVUxlnQ==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@tailwindcss/oxide-wasm32-wasi@4.2.2':
    resolution: {integrity: sha512-eKSztKsmEsn1O5lJ4ZAfyn41NfG7vzCg496YiGtMDV86jz1q/irhms5O0VrY6ZwTUkFy/EKG3RfWgxSI3VbZ8Q==}
    engines: {node: '>=14.0.0'}
    cpu: [wasm32]
    bundledDependencies:
      - '@napi-rs/wasm-runtime'
      - '@emnapi/core'
      - '@emnapi/runtime'
      - '@tybys/wasm-util'
      - '@emnapi/wasi-threads'
      - tslib

  '@tailwindcss/oxide-win32-arm64-msvc@4.2.2':
    resolution: {integrity: sha512-qPmaQM4iKu5mxpsrWZMOZRgZv1tOZpUm+zdhhQP0VhJfyGGO3aUKdbh3gDZc/dPLQwW4eSqWGrrcWNBZWUWaXQ==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [win32]

  '@tailwindcss/oxide-win32-x64-msvc@4.2.2':
    resolution: {integrity: sha512-1T/37VvI7WyH66b+vqHj/cLwnCxt7Qt3WFu5Q8hk65aOvlwAhs7rAp1VkulBJw/N4tMirXjVnylTR72uI0HGcA==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [win32]

  '@tailwindcss/oxide@4.2.2':
    resolution: {integrity: sha512-qEUA07+E5kehxYp9BVMpq9E8vnJuBHfJEC0vPC5e7iL/hw7HR61aDKoVoKzrG+QKp56vhNZe4qwkRmMC0zDLvg==}
    engines: {node: '>= 20'}

  '@tailwindcss/vite@4.2.2':
    resolution: {integrity: sha512-mEiF5HO1QqCLXoNEfXVA1Tzo+cYsrqV7w9Juj2wdUFyW07JRenqMG225MvPwr3ZD9N1bFQj46X7r33iHxLUW0w==}
    peerDependencies:
      vite: ^5.2.0 || ^6 || ^7 || ^8

  '@tybys/wasm-util@0.10.1':
    resolution: {integrity: sha512-9tTaPJLSiejZKx+Bmog4uSubteqTvFrVrURwkmHixBo0G4seD0zUxp98E1DzUBJxLQ3NPwXrGKDiVjwx/DpPsg==}

  '@types/node@22.19.17':
    resolution: {integrity: sha512-wGdMcf+vPYM6jikpS/qhg6WiqSV/OhG+jeeHT/KlVqxYfD40iYJf9/AE1uQxVWFvU7MipKRkRv8NSHiCGgPr8Q==}

  '@types/react-dom@19.2.3':
    resolution: {integrity: sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==}
    peerDependencies:
      '@types/react': ^19.2.0

  '@types/react@19.2.14':
    resolution: {integrity: sha512-ilcTH/UniCkMdtexkoCN0bI7pMcJDvmQFPvuPvmEaYA/NSfFTAgdUSLAoVjaRJm7+6PvcM+q1zYOwS4wTYMF9w==}

  '@vitejs/plugin-react@6.0.1':
    resolution: {integrity: sha512-l9X/E3cDb+xY3SWzlG1MOGt2usfEHGMNIaegaUGFsLkb3RCn/k8/TOXBcab+OndDI4TBtktT8/9BwwW8Vi9KUQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    peerDependencies:
      '@rolldown/plugin-babel': ^0.1.7 || ^0.2.0
      babel-plugin-react-compiler: ^1.0.0
      vite: ^8.0.0
    peerDependenciesMeta:
      '@rolldown/plugin-babel':
        optional: true
      babel-plugin-react-compiler:
        optional: true

  csstype@3.2.3:
    resolution: {integrity: sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==}

  detect-libc@2.1.2:
    resolution: {integrity: sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==}
    engines: {node: '>=8'}

  enhanced-resolve@5.20.1:
    resolution: {integrity: sha512-Qohcme7V1inbAfvjItgw0EaxVX5q2rdVEZHRBrEQdRZTssLDGsL8Lwrznl8oQ/6kuTJONLaDcGjkNP247XEhcA==}
    engines: {node: '>=10.13.0'}

  fdir@6.5.0:
    resolution: {integrity: sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==}
    engines: {node: '>=12.0.0'}
    peerDependencies:
      picomatch: ^3 || ^4
    peerDependenciesMeta:
      picomatch:
        optional: true

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  graceful-fs@4.2.11:
    resolution: {integrity: sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==}

  iceberg-js@0.8.1:
    resolution: {integrity: sha512-1dhVQZXhcHje7798IVM+xoo/1ZdVfzOMIc8/rgVSijRK38EDqOJoGula9N/8ZI5RD8QTxNQtK/Gozpr+qUqRRA==}
    engines: {node: '>=20.0.0'}

  jiti@2.6.1:
    resolution: {integrity: sha512-ekilCSN1jwRvIbgeg/57YFh8qQDNbwDb9xT/qu2DAHbFFZUicIl4ygVaAvzveMhMVr3LnpSKTNnwt8PoOfmKhQ==}
    hasBin: true

  lightningcss-android-arm64@1.32.0:
    resolution: {integrity: sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [android]

  lightningcss-darwin-arm64@1.32.0:
    resolution: {integrity: sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [darwin]

  lightningcss-darwin-x64@1.32.0:
    resolution: {integrity: sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [darwin]

  lightningcss-freebsd-x64@1.32.0:
    resolution: {integrity: sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [freebsd]

  lightningcss-linux-arm-gnueabihf@1.32.0:
    resolution: {integrity: sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm]
    os: [linux]

  lightningcss-linux-arm64-gnu@1.32.0:
    resolution: {integrity: sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  lightningcss-linux-arm64-musl@1.32.0:
    resolution: {integrity: sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  lightningcss-linux-x64-gnu@1.32.0:
    resolution: {integrity: sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  lightningcss-linux-x64-musl@1.32.0:
    resolution: {integrity: sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  lightningcss-win32-arm64-msvc@1.32.0:
    resolution: {integrity: sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [win32]

  lightningcss-win32-x64-msvc@1.32.0:
    resolution: {integrity: sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [win32]

  lightningcss@1.32.0:
    resolution: {integrity: sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==}
    engines: {node: '>= 12.0.0'}

  magic-string@0.30.21:
    resolution: {integrity: sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==}

  nanoid@3.3.19:
    resolution: {integrity: sha512-Y2tUNy4ouw6tq5oDSKeQYGOyhkUBhNOcGV/02KC+6kd9eDGqdZd++mjMiIDilrBYvjEnCYvVtsuHCuP+okSfug==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  oxfmt@0.2.0:
    resolution: {integrity: sha512-99bPAiYDiYikUej8U0Slv8pcFVbMe38Ulm+T6bJ4KQgm+UsbgTKCBpWxbD/LRz1CuYw3PRpqfPv6AkQsIAo3Ag==}
    engines: {node: '>=8.*'}
    hasBin: true

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@4.0.4:
    resolution: {integrity: sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A==}
    engines: {node: '>=12'}

  playwright-core@1.64.1:
    resolution: {integrity: sha512-BC4s8y6SEVA6Q1rSxZTto8hI1KUI3xXlHGZgvGqP4IqPdI/a6FX9H29IDNz7vKo9l21b6LfYosScPL6M3xxyDQ==}
    engines: {node: '>=20'}
    hasBin: true

  playwright@1.64.1:
    resolution: {integrity: sha512-HCrVhHr5QQuwYoswEUGTb7gGp522yflbv/ST8nF4sFWGuLjQCt17Q/EubpGGSNKYn1tsTCPZxqHhHCfVURu7UA==}
    engines: {node: '>=20'}
    hasBin: true

  postcss@8.5.23:
    resolution: {integrity: sha512-g50586zr4bZmwFiTlflMu8E0bDTb5I5gertgwAKmsdUlTQIhZtunzUlD1WSzwcVWPoAVpsrA6vlfCD7oXvRwgg==}
    engines: {node: ^10 || ^12 || >=14}

  react-dom@19.2.4:
    resolution: {integrity: sha512-AXJdLo8kgMbimY95O2aKQqsz2iWi9jMgKJhRBAxECE4IFxfcazB2LmzloIoibJI3C12IlY20+KFaLv+71bUJeQ==}
    peerDependencies:
      react: ^19.2.4

  react@19.2.4:
    resolution: {integrity: sha512-9nfp2hYpCwOjAN+8TZFGhtWEwgvWHXqESH8qT89AT/lWklpLON22Lc8pEtnpsZz7VmawabSU0gCjnj8aC0euHQ==}
    engines: {node: '>=0.10.0'}

  rolldown@1.0.0-rc.12:
    resolution: {integrity: sha512-yP4USLIMYrwpPHEFB5JGH1uxhcslv6/hL0OyvTuY+3qlOSJvZ7ntYnoWpehBxufkgN0cvXxppuTu5hHa/zPh+A==}
    engines: {node: ^20.19.0 || >=22.12.0}
    hasBin: true

  scheduler@0.27.0:
    resolution: {integrity: sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==}

  source-map-js@1.2.2:
    resolution: {integrity: sha512-KGj/8Y43x35aZVDtt+J4mK1hoLGHULMYfSkODJNQjNDC3oW1PqPoxMwo0pLUsWM/UEGzON/NxeHywEfNXNP3Vw==}
    engines: {node: '>=0.10.0'}

  tailwindcss@4.2.2:
    resolution: {integrity: sha512-KWBIxs1Xb6NoLdMVqhbhgwZf2PGBpPEiwOqgI4pFIYbNTfBXiKYyWoTsXgBQ9WFg/OlhnvHaY+AEpW7wSmFo2Q==}

  tapable@2.3.2:
    resolution: {integrity: sha512-1MOpMXuhGzGL5TTCZFItxCc0AARf1EZFQkGqMm7ERKj8+Hgr5oLvJOVFcC+lRmR8hCe2S3jC4T5D7Vg/d7/fhA==}
    engines: {node: '>=6'}

  tinyglobby@0.2.15:
    resolution: {integrity: sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==}
    engines: {node: '>=12.0.0'}

  tslib@2.8.1:
    resolution: {integrity: sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==}

  typescript@5.9.3:
    resolution: {integrity: sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==}
    engines: {node: '>=14.17'}
    hasBin: true

  undici-types@6.21.0:
    resolution: {integrity: sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==}

  vite@8.0.5:
    resolution: {integrity: sha512-nmu43Qvq9UopTRfMx2jOYW5l16pb3iDC1JH6yMuPkpVbzK0k+L7dfsEDH4jRgYFmsg0sTAqkojoZgzLMlwHsCQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    hasBin: true
    peerDependencies:
      '@types/node': ^20.19.0 || >=22.12.0
      '@vitejs/devtools': ^0.1.0
      esbuild: ^0.27.0 || ^0.28.0
      jiti: '>=1.21.0'
      less: ^4.0.0
      sass: ^1.70.0
      sass-embedded: ^1.70.0
      stylus: '>=0.54.8'
      sugarss: ^5.0.0
      terser: ^5.16.0
      tsx: ^4.8.1
      yaml: ^2.4.2
    peerDependenciesMeta:
      '@types/node':
        optional: true
      '@vitejs/devtools':
        optional: true
      esbuild:
        optional: true
      jiti:
        optional: true
      less:
        optional: true
      sass:
        optional: true
      sass-embedded:
        optional: true
      stylus:
        optional: true
      sugarss:
        optional: true
      terser:
        optional: true
      tsx:
        optional: true
      yaml:
        optional: true

snapshots:

  '@emnapi/core@1.9.1':
    dependencies:
      '@emnapi/wasi-threads': 1.2.0
      tslib: 2.8.1
    optional: true

  '@emnapi/runtime@1.9.1':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@emnapi/wasi-threads@1.2.0':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@jridgewell/gen-mapping@0.3.13':
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.5
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/remapping@2.3.5':
    dependencies:
      '@jridgewell/gen-mapping': 0.3.13
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/sourcemap-codec@1.5.5': {}

  '@jridgewell/trace-mapping@0.3.31':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.5

  '@napi-rs/wasm-runtime@1.1.1':
    dependencies:
      '@emnapi/core': 1.9.1
      '@emnapi/runtime': 1.9.1
      '@tybys/wasm-util': 0.10.1
    optional: true

  '@oxc-project/types@0.122.0': {}

  '@oxfmt/darwin-arm64@0.2.0':
    optional: true

  '@oxfmt/darwin-x64@0.2.0':
    optional: true

  '@oxfmt/linux-arm64-gnu@0.2.0':
    optional: true

  '@oxfmt/linux-arm64-musl@0.2.0':
    optional: true

  '@oxfmt/linux-x64-gnu@0.2.0':
    optional: true

  '@oxfmt/linux-x64-musl@0.2.0':
    optional: true

  '@oxfmt/win32-arm64@0.2.0':
    optional: true

  '@oxfmt/win32-x64@0.2.0':
    optional: true

  '@playwright/test@1.64.1':
    dependencies:
      playwright: 1.64.1

  '@rolldown/binding-android-arm64@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-darwin-arm64@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-darwin-x64@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-freebsd-x64@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-linux-arm-gnueabihf@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-linux-arm64-gnu@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-linux-arm64-musl@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-linux-ppc64-gnu@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-linux-s390x-gnu@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-linux-x64-gnu@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-linux-x64-musl@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-openharmony-arm64@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-wasm32-wasi@1.0.0-rc.12':
    dependencies:
      '@napi-rs/wasm-runtime': 1.1.1
    optional: true

  '@rolldown/binding-win32-arm64-msvc@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-win32-x64-msvc@1.0.0-rc.12':
    optional: true

  '@rolldown/pluginutils@1.0.0-rc.12': {}

  '@rolldown/pluginutils@1.0.0-rc.7': {}

  '@supabase/auth-js@2.118.0':
    dependencies:
      tslib: 2.8.1

  '@supabase/functions-js@2.118.0':
    dependencies:
      tslib: 2.8.1

  '@supabase/phoenix@0.4.5': {}

  '@supabase/postgrest-js@2.118.0':
    dependencies:
      tslib: 2.8.1

  '@supabase/realtime-js@2.118.0':
    dependencies:
      '@supabase/phoenix': 0.4.5
      tslib: 2.8.1

  '@supabase/storage-js@2.118.0':
    dependencies:
      iceberg-js: 0.8.1
      tslib: 2.8.1

  '@supabase/supabase-js@2.118.0':
    dependencies:
      '@supabase/auth-js': 2.118.0
      '@supabase/functions-js': 2.118.0
      '@supabase/postgrest-js': 2.118.0
      '@supabase/realtime-js': 2.118.0
      '@supabase/storage-js': 2.118.0

  '@tailwindcss/node@4.2.2':
    dependencies:
      '@jridgewell/remapping': 2.3.5
      enhanced-resolve: 5.20.1
      jiti: 2.6.1
      lightningcss: 1.32.0
      magic-string: 0.30.21
      source-map-js: 1.2.2
      tailwindcss: 4.2.2

  '@tailwindcss/oxide-android-arm64@4.2.2':
    optional: true

  '@tailwindcss/oxide-darwin-arm64@4.2.2':
    optional: true

  '@tailwindcss/oxide-darwin-x64@4.2.2':
    optional: true

  '@tailwindcss/oxide-freebsd-x64@4.2.2':
    optional: true

  '@tailwindcss/oxide-linux-arm-gnueabihf@4.2.2':
    optional: true

  '@tailwindcss/oxide-linux-arm64-gnu@4.2.2':
    optional: true

  '@tailwindcss/oxide-linux-arm64-musl@4.2.2':
    optional: true

  '@tailwindcss/oxide-linux-x64-gnu@4.2.2':
    optional: true

  '@tailwindcss/oxide-linux-x64-musl@4.2.2':
    optional: true

  '@tailwindcss/oxide-wasm32-wasi@4.2.2':
    optional: true

  '@tailwindcss/oxide-win32-arm64-msvc@4.2.2':
    optional: true

  '@tailwindcss/oxide-win32-x64-msvc@4.2.2':
    optional: true

  '@tailwindcss/oxide@4.2.2':
    optionalDependencies:
      '@tailwindcss/oxide-android-arm64': 4.2.2
      '@tailwindcss/oxide-darwin-arm64': 4.2.2
      '@tailwindcss/oxide-darwin-x64': 4.2.2
      '@tailwindcss/oxide-freebsd-x64': 4.2.2
      '@tailwindcss/oxide-linux-arm-gnueabihf': 4.2.2
      '@tailwindcss/oxide-linux-arm64-gnu': 4.2.2
      '@tailwindcss/oxide-linux-arm64-musl': 4.2.2
      '@tailwindcss/oxide-linux-x64-gnu': 4.2.2
      '@tailwindcss/oxide-linux-x64-musl': 4.2.2
      '@tailwindcss/oxide-wasm32-wasi': 4.2.2
      '@tailwindcss/oxide-win32-arm64-msvc': 4.2.2
      '@tailwindcss/oxide-win32-x64-msvc': 4.2.2

  '@tailwindcss/vite@4.2.2(vite@8.0.5(@types/node@22.19.17)(jiti@2.6.1))':
    dependencies:
      '@tailwindcss/node': 4.2.2
      '@tailwindcss/oxide': 4.2.2
      tailwindcss: 4.2.2
      vite: 8.0.5(@types/node@22.19.17)(jiti@2.6.1)

  '@tybys/wasm-util@0.10.1':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@types/node@22.19.17':
    dependencies:
      undici-types: 6.21.0

  '@types/react-dom@19.2.3(@types/react@19.2.14)':
    dependencies:
      '@types/react': 19.2.14

  '@types/react@19.2.14':
    dependencies:
      csstype: 3.2.3

  '@vitejs/plugin-react@6.0.1(vite@8.0.5(@types/node@22.19.17)(jiti@2.6.1))':
    dependencies:
      '@rolldown/pluginutils': 1.0.0-rc.7
      vite: 8.0.5(@types/node@22.19.17)(jiti@2.6.1)

  csstype@3.2.3: {}

  detect-libc@2.1.2: {}

  enhanced-resolve@5.20.1:
    dependencies:
      graceful-fs: 4.2.11
      tapable: 2.3.2

  fdir@6.5.0(picomatch@4.0.4):
    optionalDependencies:
      picomatch: 4.0.4

  fsevents@2.3.3:
    optional: true

  graceful-fs@4.2.11: {}

  iceberg-js@0.8.1: {}

  jiti@2.6.1: {}

  lightningcss-android-arm64@1.32.0:
    optional: true

  lightningcss-darwin-arm64@1.32.0:
    optional: true

  lightningcss-darwin-x64@1.32.0:
    optional: true

  lightningcss-freebsd-x64@1.32.0:
    optional: true

  lightningcss-linux-arm-gnueabihf@1.32.0:
    optional: true

  lightningcss-linux-arm64-gnu@1.32.0:
    optional: true

  lightningcss-linux-arm64-musl@1.32.0:
    optional: true

  lightningcss-linux-x64-gnu@1.32.0:
    optional: true

  lightningcss-linux-x64-musl@1.32.0:
    optional: true

  lightningcss-win32-arm64-msvc@1.32.0:
    optional: true

  lightningcss-win32-x64-msvc@1.32.0:
    optional: true

  lightningcss@1.32.0:
    dependencies:
      detect-libc: 2.1.2
    optionalDependencies:
      lightningcss-android-arm64: 1.32.0
      lightningcss-darwin-arm64: 1.32.0
      lightningcss-darwin-x64: 1.32.0
      lightningcss-freebsd-x64: 1.32.0
      lightningcss-linux-arm-gnueabihf: 1.32.0
      lightningcss-linux-arm64-gnu: 1.32.0
      lightningcss-linux-arm64-musl: 1.32.0
      lightningcss-linux-x64-gnu: 1.32.0
      lightningcss-linux-x64-musl: 1.32.0
      lightningcss-win32-arm64-msvc: 1.32.0
      lightningcss-win32-x64-msvc: 1.32.0

  magic-string@0.30.21:
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.5

  nanoid@3.3.19: {}

  oxfmt@0.2.0:
    optionalDependencies:
      '@oxfmt/darwin-arm64': 0.2.0
      '@oxfmt/darwin-x64': 0.2.0
      '@oxfmt/linux-arm64-gnu': 0.2.0
      '@oxfmt/linux-arm64-musl': 0.2.0
      '@oxfmt/linux-x64-gnu': 0.2.0
      '@oxfmt/linux-x64-musl': 0.2.0
      '@oxfmt/win32-arm64': 0.2.0
      '@oxfmt/win32-x64': 0.2.0

  picocolors@1.1.1: {}

  picomatch@4.0.4: {}

  playwright-core@1.64.1: {}

  playwright@1.64.1:
    dependencies:
      playwright-core: 1.64.1

  postcss@8.5.23:
    dependencies:
      nanoid: 3.3.19
      picocolors: 1.1.1
      source-map-js: 1.2.2

  react-dom@19.2.4(react@19.2.4):
    dependencies:
      react: 19.2.4
      scheduler: 0.27.0

  react@19.2.4: {}

  rolldown@1.0.0-rc.12:
    dependencies:
      '@oxc-project/types': 0.122.0
      '@rolldown/pluginutils': 1.0.0-rc.12
    optionalDependencies:
      '@rolldown/binding-android-arm64': 1.0.0-rc.12
      '@rolldown/binding-darwin-arm64': 1.0.0-rc.12
      '@rolldown/binding-darwin-x64': 1.0.0-rc.12
      '@rolldown/binding-freebsd-x64': 1.0.0-rc.12
      '@rolldown/binding-linux-arm-gnueabihf': 1.0.0-rc.12
      '@rolldown/binding-linux-arm64-gnu': 1.0.0-rc.12
      '@rolldown/binding-linux-arm64-musl': 1.0.0-rc.12
      '@rolldown/binding-linux-ppc64-gnu': 1.0.0-rc.12
      '@rolldown/binding-linux-s390x-gnu': 1.0.0-rc.12
      '@rolldown/binding-linux-x64-gnu': 1.0.0-rc.12
      '@rolldown/binding-linux-x64-musl': 1.0.0-rc.12
      '@rolldown/binding-openharmony-arm64': 1.0.0-rc.12
      '@rolldown/binding-wasm32-wasi': 1.0.0-rc.12
      '@rolldown/binding-win32-arm64-msvc': 1.0.0-rc.12
      '@rolldown/binding-win32-x64-msvc': 1.0.0-rc.12

  scheduler@0.27.0: {}

  source-map-js@1.2.2: {}

  tailwindcss@4.2.2: {}

  tapable@2.3.2: {}

  tinyglobby@0.2.15:
    dependencies:
      fdir: 6.5.0(picomatch@4.0.4)
      picomatch: 4.0.4

  tslib@2.8.1: {}

  typescript@5.9.3: {}

  undici-types@6.21.0: {}

  vite@8.0.5(@types/node@22.19.17)(jiti@2.6.1):
    dependencies:
      lightningcss: 1.32.0
      picomatch: 4.0.4
      postcss: 8.5.23
      rolldown: 1.0.0-rc.12
      tinyglobby: 0.2.15
    optionalDependencies:
      '@types/node': 22.19.17
      fsevents: 2.3.3
      jiti: 2.6.1
```

## .vercelignore

```text
node_modules
dist
work
.tmp
.DS_Store
*.zip
*.log
.figaro
.env*
```

## src/main.tsx

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ClassRoom from './ClassRoom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClassRoom><App /></ClassRoom>
  </React.StrictMode>,
)
```

## src/App.tsx

```tsx
import BulbIcon from "./BulbIcon"
import { lessonPages, pageForSlide, sourceSlideForPage } from "./lesson-navigation"
import { displayStudent } from "./class-display"
import { SharedText } from "./ClassResults"
import { ClassBadge, useClassroom } from "./ClassRoom"
import TutorActivity from "./TutorActivity"
import type { QuestionRow } from "./class-types"
import ExtraActivity from "./ExtraActivity"
import { createPortal } from "react-dom"
import MyLearning, { initialLearningEntries, type LearningEntry } from "./MyLearning"
import {
  useEffect,
  useLayoutEffect,
  useId,
  useMemo,
  useReducer,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react"
import {
  activityAnswer,
  activityReducer,
  activityTemplates,
  initialActivities,
  type ActivityRun,
  type ActivityAction,
} from "./activity-state"
import {
  initialPeerDiscussions,
  peerDiscussionReducer,
  samplePeerResponses,
  type PeerDiscussion,
  type PeerDiscussionAction,
  type PeerMessage,
} from "./peer-discussion"

type Section = "live" | "learning"
type LessonReaction = "understood" | "thinking" | "confused" | "insightful" | "applause"

const lessonReactions: {
  id: LessonReaction
  emoji: string
  label: string
  description: string
}[] = [
  {
    id: "understood",
    emoji: "✅",
    label: "Got it",
    description: "I’m following along",
  },
  {
    id: "thinking",
    emoji: "🤔",
    label: "Thinking",
    description: "I’m thinking this through",
  },
  {
    id: "confused",
    emoji: "❓",
    label: "Confused",
    description: "I need a little more explanation",
  },
  {
    id: "insightful",
    emoji: "💡",
    label: "Insightful",
    description: "This helped something click",
  },
  {
    id: "applause",
    emoji: "👏",
    label: "Applause",
    description: "That was really helpful",
  },
]

type IconName = "progress" | "slide" | "broadcast" | "sparkles" | "bookmark" | "search" | "plus" | "chevron" | "person" | "globe" | "arrow" | "heart" | "bubble" | "share" | "ellipsis" | "tray" | "folder" | "grid" | "list" | "check" | "mic" | "sidebar" | "x" | "help" | "expand"


function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    progress: <><path d="M4 19h16M7 15v-4M12 15V5M17 15V8" /></>,
    slide: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M12 17v4M8 21h8" /></>,
    broadcast: (
      <>
        <circle cx="12" cy="12" r="2.3" />
        <path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.8 4.8a10.2 10.2 0 0 0 0 14.4M19.2 4.8a10.2 10.2 0 0 1 0 14.4" />
      </>
    ),
    sparkles: (
      <path d="m12 3 .9 3.1A4.2 4.2 0 0 0 15.9 9l3.1 1-3.1.9a4.2 4.2 0 0 0-3 3L12 17l-.9-3.1a4.2 4.2 0 0 0-3-3L5 10l3.1-.9a4.2 4.2 0 0 0 3-3L12 3ZM18.5 15.5l.4 1.2a2 2 0 0 0 1.3 1.4l1.3.4-1.3.4a2 2 0 0 0-1.3 1.3l-.4 1.3-.4-1.3a2 2 0 0 0-1.3-1.3l-1.3-.4 1.3-.4a2 2 0 0 0 1.3-1.4l.4-1.2Z" />
    ),
    bookmark: (
      <path d="M6.5 4.7c0-1 .8-1.7 1.7-1.7h7.6c.9 0 1.7.8 1.7 1.7V21L12 17.1 6.5 21V4.7Z" />
    ),
    search: (
      <>
        <circle cx="10.7" cy="10.7" r="6.7" />
        <path d="m16 16 4 4" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    chevron: <path d="m9 6 6 6-6 6" />,
    person: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5.5 20c.5-4 2.7-6 6.5-6s6 2 6.5 6" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.7 5.5 3.7 9s-1.2 6.5-3.7 9c-2.5-2.5-3.7-5.5-3.7-9S9.5 5.5 12 3Z" />
      </>
    ),
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    heart: (
      <path d="M20.8 5.8c-1.8-1.9-4.8-1.9-6.7 0L12 8l-2.1-2.2a4.6 4.6 0 0 0-6.7 0 5 5 0 0 0 0 6.9L12 21l8.8-8.3a5 5 0 0 0 0-6.9Z" />
    ),
    bubble: (
      <path d="M20.5 11.4c0 4.5-4 8.1-8.9 8.1-1.1 0-2.2-.2-3.2-.5L4 21l1.1-4c-1.5-1.5-2.4-3.4-2.4-5.6 0-4.5 4-8.1 8.9-8.1s8.9 3.6 8.9 8.1Z" />
    ),
    share: (
      <>
        <path d="M12 15V3m0 0L8 7m4-4 4 4" />
        <path d="M5 11v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8" />
      </>
    ),
    ellipsis: (
      <>
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
      </>
    ),
    tray: (
      <>
        <path d="M4 5h16v14H4z" />
        <path d="M4 14h5l1.5 2h3L15 14h5" />
      </>
    ),
    folder: <path d="M3 7.5h7l2-2h3.5c1 0 1.5.5 1.8 1.5H21v12H3V7.5Z" />,
    grid: <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />,
    list: <path d="M9 6h11M9 12h11M9 18h11M4 6h.1M4 12h.1M4 18h.1" />,
    check: <path d="m5 12 4.5 4.5L19 7" />,
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9a2.5 2.5 0 0 1 5 .2c0 1.8-2.5 2-2.5 3.8M12 16.5h.01" />
      </>
    ),
    mic: (
      <>
        <rect height="11" rx="3.5" width="7" x="8.5" y="3" />
        <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M8.5 21h7" />
      </>
    ),
    sidebar: <path d="M4 4h16v16H4zM15 4v16" />,
    expand: <path d="M9 4H4v5M15 4h5v5M20 15v5h-5M9 20H4v-5" />,
    x: <path d="m6 6 12 12M18 6 6 18" />,
  }
  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      >
        {paths[name]}
      </g>
    </svg>
  )
}

function ActionButton({
  ariaLabel,
  children,
  className = "",
  onClick,
  pressed,
  title,
}: {
  ariaLabel?: string
  children: ReactNode
  className?: string
  onClick?: () => void
  pressed?: boolean
  title?: string
}) {
  return (
    <button
      aria-label={ariaLabel}
      aria-pressed={pressed}
      className={`action-button ${className}`}
      onClick={onClick}
      title={title}
      type="button"
    >
      {children}
    </button>
  )
}

type ClassroomQuestion = {
  id: number | string
  dbId?: string
  tutorAnswer?: string
  sendError?: boolean
  slide: number
  name: string
  initials: string
  time: string
  text: string
  votes: number
  same: number
  answered: boolean
  answeredAt?: string
  translation?: string
  sourceLanguage?: string
}
function classroomQuestion(row: QuestionRow, currentIdentity?: import("./class-types").ClassIdentity | null): ClassroomQuestion {
  const name = row.anonymous ? "Anonymous" : displayStudent(row.student, currentIdentity || null)
  return { id: row.id, dbId: row.id, slide: row.slide || 1, name,
    initials: name.split(" ").map(part => part[0]).join("").slice(0,2), time: "a moment",
    text: row.text, translation: row.text_en || undefined, sourceLanguage: row.lang?.startsWith("zh") ? "Chinese" : row.lang || undefined,
    votes: row.upvotes, same: 0, answered: row.status === "ans", tutorAnswer: row.answer || undefined }
}
const questions: ClassroomQuestion[] = [
  {
    id: 4,
    slide: 11,
    name: "Alex Morgan",
    initials: "AM",
    time: "1 min",
    text: "How do we decide which research patterns belong in the same persona?",
    votes: 5,
    same: 0,
    answered: false,
  },
  {
    id: 5,
    slide: 15,
    name: "Anonymous",
    initials: "A",
    time: "a moment",
    text: "How can we make a How Might We question focused enough without jumping to a solution?",
    votes: 3,
    same: 0,
    answered: false,
  },
  {
    id: 3,
    slide: 10,
    name: "Yuki Tanaka",
    initials: "YT",
    time: "6 min",
    text: "Can one finding lead to multiple insights?",
    votes: 9,
    same: 3,
    answered: true,
    answeredAt: "10:22 AM",
  },
  {
    id: 1,
    slide: 8,
    name: "Maya Chen",
    initials: "MC",
    time: "2 min",
    text: "How is an insight different from a finding?",
    answeredAt: "10:24 AM",
    votes: 18,
    same: 7,
    answered: true,
  },
  {
    id: 2,
    slide: 15,
    name: "Anonymous",
    initials: "A",
    time: "4 min",
    text: "我们怎么判断一个洞察是否有足够的证据支持？",
    translation: "How do we know whether an insight is supported by evidence?",
    sourceLanguage: "Chinese",
    votes: 12,
    same: 5,
    answered: false,
  },
]

function Sidebar({
  section,
  setSection,
}: {
  section: Section
  setSection: (section: Section) => void
}) {
  const courses = [
    {
      code: "9106",
      name: "Design Thinking",
      semester: "Semester 2 · 2026",
    },
    {
      code: "9105",
      name: "Interface Design",
      semester: "Semester 2 · 2026",
    },
    {
      code: "9103",
      name: "Creative Coding",
      semester: "Semester 2 · 2026",
    },
  ]
  const [courseCode, setCourseCode] = useState("9106")
  const [courseMenuOpen, setCourseMenuOpen] = useState(false)
  useEffect(() => {
    if (!courseMenuOpen) return
    function outside(event: PointerEvent) {
      if (event.target instanceof Element && !event.target.closest(".course-menu, .course-card")) setCourseMenuOpen(false)
    }
    function keyboard(event: KeyboardEvent) {
      if (event.key === "Escape") { setCourseMenuOpen(false); document.querySelector<HTMLButtonElement>(".course-card")?.focus() }
    }
    document.addEventListener("pointerdown", outside)
    document.addEventListener("keydown", keyboard)
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", keyboard) }
  }, [courseMenuOpen])
  const activeCourse =
    courses.find((course) => course.code === courseCode) ?? courses[0]
  const items: {
    id: Section
    label: string
    icon: IconName
    isLive?: boolean
  }[] = [
    {
      id: "live",
      label: "Live",
      icon: "broadcast",
      isLive: true,
    },
    { id: "learning", label: "My Learning", icon: "progress" },
  ]
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark" aria-hidden="true">
          <img alt="" height="30" src="/assets/studio-bridge-logo.svg" width="30" />
        </div>
      </div>
      <nav className="primary-nav" aria-label="Main sections">
        {items.map((item) => (
          <button
            aria-current={section === item.id ? "page" : undefined}
            aria-label={item.label}
            className={section === item.id ? "nav-item active" : "nav-item"}
            key={item.id}
            onClick={() => setSection(item.id)}
            title={item.label}
            type="button"
          >
            <span className="nav-icon">
              <Icon name={item.icon} size={19} />
              {item.isLive && (
                <span aria-hidden="true" className="nav-live-indicator" />
              )}
            </span>
          </button>
        ))}
      </nav>
      <div className="sidebar-spacer" />
      <div className="course-switcher">
        {courseMenuOpen && (
          <CourseMenu>
            <div className="course-menu-heading">
              <strong>Switch course</strong>
              <small>Semester 2 · 2026</small>
            </div>
            {courses.map((course) => (
              <button
                className={course.code === courseCode ? "selected" : ""}
                key={course.code}
                onClick={() => {
                  setCourseCode(course.code)
                  setCourseMenuOpen(false)
                }}
                role="menuitem"
                type="button"
              >
                <span className={`course-code course-${course.code}`}>
                  {course.code}
                </span>
                <span>
                  <strong>{course.name}</strong>
                  <small>IDEA{course.code}</small>
                </span>
                {course.code === courseCode && (
                  <span className="course-selected">
                    <Icon name="check" size={12} />
                  </span>
                )}
              </button>
            ))}
          </CourseMenu>
        )}
        <button
          aria-label={`Switch course. Current course: IDEA${activeCourse.code} ${activeCourse.name}`}
          aria-haspopup="menu"
          aria-expanded={courseMenuOpen}
          className="course-card"
          onClick={() => setCourseMenuOpen(!courseMenuOpen)}
          title={`IDEA${activeCourse.code} · ${activeCourse.name}`}
          type="button"
        >
          <span className={`course-code course-${activeCourse.code}`}>
            {activeCourse.code}
          </span>
        </button>
      </div>
      <div className="profile" title="Elena Liu · Student · Online">
        <span className="avatar image-avatar">EL</span>
      </div>
    </aside>
  )
}

function CourseMenu({ children }: { children: ReactNode }) {
  const [position, setPosition] = useState<{ left: number; bottom: number } | null>(null)
  useLayoutEffect(() => {
    function place() {
      const control = document.querySelector(".course-card")
      if (!control) return
      const bounds = control.getBoundingClientRect()
      setPosition({ left: Math.min(bounds.right + 12, window.innerWidth - 240), bottom: window.innerHeight - bounds.bottom })
    }
    place()
    window.addEventListener("resize", place)
    return () => window.removeEventListener("resize", place)
  }, [])
  return position && createPortal(<div className="course-menu glass" role="menu" style={{ position: "fixed", left: position.left, bottom: position.bottom }}>{children}</div>, document.body)
}

function ComposerMenu({ children, className }: { children: ReactNode; className: string }) {
  const [position, setPosition] = useState<{ left: number; bottom: number } | null>(null)
  useLayoutEffect(() => {
    function place() {
      const control = document.querySelector('.identity-control[aria-expanded="true"]')
      if (!control) return
      const bounds = control.getBoundingClientRect()
      setPosition({ left: Math.max(12, Math.min(bounds.left, window.innerWidth - 248)), bottom: window.innerHeight - bounds.top + 8 })
    }
    place()
    window.addEventListener("resize", place)
    return () => window.removeEventListener("resize", place)
  }, [])
  return position && createPortal(
    <div className={className} role="menu" style={{ position: "fixed", left: position.left, bottom: position.bottom }}>{children}</div>, document.body,
  )
}

function ActivityContent({
  activity,
  onSelect,
  onSubmit,
  onReturn,
  onViewPeers,
  returnLabel = "Back to class",
}: {
  activity: ActivityRun
  onSelect: (answer: number) => void
  onSubmit: () => void
  onReturn?: () => void
  onViewPeers: () => void
  returnLabel?: string
}) {
  const groupId = useId()
  const template = activityTemplates[activity.kind]
  return (
    <div className="activity-content">
      <div className="activity-meta">
        <span>{template.label}</span>
        <span
          className={
            activity.submitted ? "activity-status submitted" : "activity-status"
          }
        >
          {activity.submitted ? (
            <>
              <Icon name="check" size={12} /> Submitted
            </>
          ) : (
            "Open"
          )}
        </span>
      </div>
      <h3>{template.title}</h3>
      <p className="activity-description">{template.description}</p>
      {activity.submitted ? (
        <div className="activity-confirmation" role="status">
          <div className="activity-confirmation-heading">
            <span className="activity-confirmation-icon">
              <Icon name="check" size={20} />
            </span>
            <div>
              <strong>You’re all set.</strong>
              <p>Your response is saved for this session.</p>
            </div>
          </div>
          <div className="activity-answer">
            <small>Your response</small>
            <span>{activityAnswer(activity)}</span>
          </div>
          <div className="activity-confirmation-actions">
          <button
            className="activity-peer-link"
            onClick={onViewPeers}
            type="button"
          >
            <Icon name="bubble" size={17} /> View peer responses{" "}
            <Icon name="chevron" size={14} />
          </button>
          {onReturn && (
            <button
              className="activity-submit"
              onClick={onReturn}
              type="button"
            >
              {returnLabel} <Icon name="arrow" size={16} />
            </button>
          )}
          </div>
        </div>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault()
            onSubmit()
          }}
        >
          <fieldset className="activity-answers">
            <legend>
              {activity.kind === "choice"
                ? "Choose one answer"
                : "Choose a score from 1 to 5"}
            </legend>
            {activity.kind === "choice" ? (
              <div className="activity-options">
                {template.options.map((option, index) => (
                  <label
                    className={
                      activity.answer === index
                        ? "activity-option selected"
                        : "activity-option"
                    }
                    key={option}
                  >
                    <input
                      checked={activity.answer === index}
                      name={groupId}
                      onChange={() => onSelect(index)}
                      type="radio"
                      value={index}
                    />
                    <span className="activity-option-letter" aria-hidden="true">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            ) : (
              <>
                <div className="activity-rating">
                  {[1, 2, 3, 4, 5].map((score) => (
                    <label key={score}>
                      <input
                        aria-label={`${score} out of 5${
                          score === 1
                            ? ", not confident yet"
                            : score === 5
                              ? ", ready to try"
                              : ""
                        }`}
                        checked={activity.answer === score}
                        className="sr-only"
                        name={groupId}
                        onChange={() => onSelect(score)}
                        type="radio"
                        value={score}
                      />
                      <span>{score}</span>
                    </label>
                  ))}
                </div>
                <div className="activity-rating-labels">
                  <span>Not confident yet</span>
                  <span>Ready to try</span>
                </div>
              </>
            )}
          </fieldset>
          <p className="activity-local-note">
            Responses are kept for this session.
          </p>
        </form>
      )}
    </div>
  )
}

function PeerMessageItem({ message }: { message: PeerMessage }) {
  return (
    <div
      className={message.own ? "peer-message own" : "peer-message"}
      data-message-id={message.id}
    >
      <span
        className={
          message.own ? "avatar image-avatar" : "avatar lavender-avatar"
        }
      >
        {message.initials}
      </span>
      <div>
        <div className="peer-message-meta">
          <strong>{message.name}</strong>
          <small>{message.own ? "You · Just now" : "Classmate"}</small>
        </div>
        <p>{message.text}</p>
      </div>
    </div>
  )
}

function ActivityPeerResponses({
  activity,
  discussion,
  dispatch,
  onBack,
  navigation,
  onPosted,
}: {
  activity: ActivityRun
  discussion: PeerDiscussion
  dispatch: (action: PeerDiscussionAction) => void
  onBack: () => void
  navigation: ReactNode
  onPosted: (text: string) => void
}) {
  const peers = samplePeerResponses[activity.kind === "rating" ? "rating" : "choice"]
  const template = activityTemplates[activity.kind]
  const composerId = useId()
  const composerRef = useRef<HTMLTextAreaElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const replyTarget = peers.find((peer) => peer.id === discussion.replyTo)
  const previousMessageCount = useRef(discussion.messages.length)
  const [announcement, setAnnouncement] = useState("")
  useEffect(() => {
    if (discussion.messages.length > previousMessageCount.current) {
      const last = discussion.messages[discussion.messages.length - 1]
      const container = scrollRef.current
      const target = container?.querySelector<HTMLElement>(
        `[data-message-id="${last.id}"]`,
      )
      if (container && target)
        container.scrollTop = Math.max(
          0,
          target.offsetTop - container.clientHeight / 2,
        )
    }
    previousMessageCount.current = discussion.messages.length
  }, [discussion.messages])
  function reply(peerId: string) {
    dispatch({ type: "reply", activityId: activity.id, peerId })
    composerRef.current?.focus({ preventScroll: true })
  }
  function post() {
    if (!discussion.draft.trim()) return
    onPosted(discussion.draft.trim())
    dispatch({ type: "post", activityId: activity.id, id: crypto.randomUUID() })
    setAnnouncement("Your comment was added to this session’s discussion.")
  }
  const values = activity.kind === "choice" ? [0, 1, 2, 3] : [1, 2, 3, 4, 5]
  const answers = [...peers.map((peer) => peer.answer), activity.answer]
  return (
    <div className="peer-discussion">
      <div className="peer-reader">
        <div className="peer-response-scroll" ref={scrollRef}>
          <div className="peer-context">
            <button className="peer-back" onClick={onBack} type="button">
              <Icon name="chevron" size={13} /> Your response
            </button>
            <h3>{template.title}</h3>
            <div className="peer-your-answer">
              <Icon name="check" size={13} />
              <span>Your answer: {activityAnswer(activity)}</span>
            </div>
          </div>
          <details className="peer-snapshot">
            <summary>
              <Icon name="grid" size={16} />
              <span>
                Compare responses
                <small>{peers.length} sample peers + you</small>
              </span>
              <Icon name="chevron" size={14} />
            </summary>
            <div className="peer-result-list">
              {values.map((value) => {
                const count = answers.filter(
                  (answer) => answer === value,
                ).length
                const label =
                  activity.kind === "choice"
                    ? `${String.fromCharCode(65 + value)}. ${template.options[value]}`
                    : `${value} / 5`
                return (
                  <div
                    className={
                      activity.answer === value
                        ? "peer-result your-answer"
                        : "peer-result"
                    }
                    key={value}
                  >
                    <div>
                      <span>{label}</span>
                      {activity.answer === value && <em>You</em>}
                      <small>
                        {count}/{answers.length}
                      </small>
                    </div>
                    <progress
                      aria-label={label}
                      max={answers.length}
                      value={count}
                    />
                  </div>
                )
              })}
            </div>
          </details>
          <div className="peer-list-heading">
            <h4>How others are thinking</h4>
            <span>{peers.length} sample peers</span>
          </div>
          {peers.map((peer) => {
            const replies = discussion.messages.filter(
              (message) => message.parentId === peer.id,
            )
            const helpful = discussion.helpfulIds.includes(peer.id)
            return (
              <article className="peer-response-card" key={peer.id}>
                <div className="peer-card-author">
                  <span className={`avatar peer-avatar-${peer.tone}`}>
                    {peer.initials}
                  </span>
                  <div>
                    <strong>{peer.name}</strong>
                    <small>IDEA9106 · Classmate</small>
                  </div>
                  <span className="peer-answer-tag">
                    {activity.kind === "choice"
                      ? `Option ${String.fromCharCode(65 + peer.answer)}`
                      : `${peer.answer} / 5`}
                  </span>
                </div>
                {activity.kind === "choice" && (
                  <p className="peer-choice-answer">
                    {template.options[peer.answer]}
                  </p>
                )}
                <p className="peer-thought">{peer.thought}</p>
                <div className="peer-card-actions">
                  <button
                    aria-label={`Mark ${peer.name}’s response as helpful`}
                    aria-pressed={helpful}
                    onClick={() =>
                      dispatch({
                        type: "helpful",
                        activityId: activity.id,
                        peerId: peer.id,
                      })
                    }
                    type="button"
                  >
                    <Icon name="sparkles" size={14} /> Helpful{" "}
                    <small>{peer.helpful + Number(helpful)}</small>
                  </button>
                  <button
                    aria-label={`Reply to ${peer.name}`}
                    onClick={() => reply(peer.id)}
                    type="button"
                  >
                    <Icon name="bubble" size={14} /> Reply
                    {replies.length > 0 && <small>{replies.length}</small>}
                  </button>
                </div>
                {replies.length > 0 && (
                  <div className="peer-replies">
                    {replies.map((message) => (
                      <PeerMessageItem key={message.id} message={message} />
                    ))}
                  </div>
                )}
              </article>
            )
          })}
          <div className="peer-general-discussion">
            <h4>Share your perspective</h4>
            {discussion.messages
              .filter((message) => message.parentId === null)
              .map((message) => (
                <PeerMessageItem key={message.id} message={message} />
              ))}
            {!discussion.messages.some(
              (message) => message.parentId === null,
            ) && (
              <p>
                What stood out to you? Add a connection, a different
                perspective, or a question for the class.
              </p>
            )}
          </div>
        </div>
        {navigation}
      </div>
      <form
        className="peer-composer"
        onSubmit={(event) => {
          event.preventDefault()
          post()
        }}
      >
        {replyTarget && (
          <div className="peer-reply-context">
            <span>
              Replying to <strong>{replyTarget.name}</strong>
            </span>
            <button
              aria-label="Cancel reply"
              onClick={() =>
                dispatch({
                  type: "reply",
                  activityId: activity.id,
                  peerId: null,
                })
              }
              type="button"
            >
              <Icon name="x" size={13} />
            </button>
          </div>
        )}
        <label className="sr-only" htmlFor={composerId}>
          Share your thoughts on question {activity.id}
        </label>
        <div className="peer-composer-input">
          <span className="avatar image-avatar">EL</span>
          <textarea
            id={composerId}
            maxLength={2000}
            onChange={(event) =>
              dispatch({
                type: "draft",
                activityId: activity.id,
                text: event.target.value,
              })
            }
            placeholder={
              replyTarget
                ? `Reply to ${replyTarget.name}…`
                : "Share a thought or ask a classmate…"
            }
            ref={composerRef}
            rows={1}
            value={discussion.draft}
          />
          <button disabled={!discussion.draft.trim()} type="submit">
            Post <Icon name="arrow" size={15} />
          </button>
        </div>
      </form>
      <span className="sr-only" role="status">
        {announcement}
      </span>
    </div>
  )
}

const slideCaptions = [
  ["Today we’re exploring personas and reframing.", "今天我们将学习用户画像与问题重构。"],
  ["We acknowledge the Traditional Custodians of the land.", "我们向这片土地的传统守护者致以敬意。"],
  ["We’ll use research insights to create a persona and reframe the brief.", "我们将运用研究洞察创建用户画像，并重构设计简报。"],
  ["Today’s agenda: mindset, personas, reframing and wrap-up.", "今天的安排：思维任务、用户画像、问题重构与总结。"],
  ["Take five minutes to complete the mindset task on Canvas.", "请用五分钟完成 Canvas 上的思维任务。"],
  ["Next, we’ll develop evidence-based personas.", "接下来，我们将建立有研究依据的用户画像。"],
  ["Use insights from your affinity diagram to build a persona.", "运用亲和图分析得到的洞察来建立用户画像。"],
  ["Personas represent typical users and are grounded in real research.", "用户画像代表典型用户，并以真实研究为基础。"],
  ["Identify behavioural, attitudinal and demographic variables in your interviews.", "从访谈中识别行为、态度和人口统计等变量。"],
  ["Look for patterns across the variables in your interview data.", "在访谈资料的不同变量之间寻找共同模式。"],
  ["Combine the patterns into a coherent persona with a name and backstory.", "将这些模式整合为连贯的用户画像，并补充姓名和背景。"],
  ["Review each other’s personas and offer constructive feedback.", "相互审阅用户画像，并提出建设性反馈。"],
  ["What makes a persona useful? Choose the answer based on research evidence.", "什么样的用户画像才有用？请选择基于研究证据的答案。"],
  ["How confident do you feel about turning an insight into a problem statement?", "你对将研究洞察转化为问题陈述有多大信心？"],
  ["Use your group’s insights to reframe the brief and ask a new How Might We question.", "运用小组洞察重构简报，并提出新的「我们如何才能」问题。"],
  ["Use a discussion card to agree, ask for clarification or share an idea.", "用讨论卡表达赞同、提出疑问或分享想法。"],
  ["Take a photo of your group’s artefact and share the thinking behind it.", "拍摄小组的设计产物，并分享背后的思考。"],
  ["Let’s wrap up today’s tutorial.", "现在我们来总结今天的课程。"],
  ["Share any unexpected insights or questions you still have.", "分享意外发现的洞察，或提出仍有疑问的地方。"],
  ["Before next week, refine your brief and prepare the problem statement.", "下周前，请完善设计简报并准备问题陈述。"],
  ["Thank you for participating. See you next week!", "感谢参与，我们下周见！"],
] as const

function LiveView({
  notify,
  questionsOpen,
  active,
  onLearningEntry,
  reviewSlide,
  activities,
  dispatchActivity,
}: {
  notify: (message: string) => void
  questionsOpen: boolean
  active: boolean
  onLearningEntry: (entry: LearningEntry) => void
  reviewSlide: { page: number; request: number; activityId?: string } | null
  activities: ActivityRun[]
  dispatchActivity: (action: ActivityAction) => void
}) {
  const room = useClassroom()
  const liveMode = Boolean(room.identity && room.session)
  const studentName = room.identity?.name || "Elena Liu"
  const [peerView, setPeerView] = useState(false)
  const [peerDiscussions, dispatchPeerDiscussion] = useReducer(
    peerDiscussionReducer,
    initialPeerDiscussions,
  )
  function submitActivity(item: ActivityRun) {
    if ((item.kind === "artefact" ? !item.photo : item.answer === null) || item.submitted) return
    dispatchActivity({ type: "submit", id: item.id })
    notify("Practice response saved on this device.")
  }
  function openPeerResponses(item: ActivityRun) {
    if (!item.submitted) return
    setPeerView(true)
  }
  const [composer, setComposer] = useState("")
  const [questionList, setQuestionList] = useState(questions)
  const [originalQuestions, setOriginalQuestions] = useState<(number | string)[]>([])
  const [replyQuestion, setReplyQuestion] = useState<number | string | null>(null)
  const [replyDrafts, setReplyDrafts] = useState<Record<string, string>>({})
  const [questionReplies, setQuestionReplies] = useState<Record<string, { id: string; text: string; name: string; english?: string }[]>>({})
  const [identity, setIdentity] = useState<"anonymous" | "named">(room.identity?.anonymous === false ? "named" : "anonymous")
  const [questionLanguage, setQuestionLanguage] = useState<"zh" | "en">("zh")
  const [identityMenuOpen, setIdentityMenuOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  useEffect(() => {
    if (!identityMenuOpen && !languageMenuOpen) return
    function closeMenus() { setIdentityMenuOpen(false); setLanguageMenuOpen(false) }
    function outside(event: PointerEvent) {
      if (!(event.target instanceof Element) || !event.target.closest(".composer-control-wrap, .composer-menu")) closeMenus()
    }
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        const openControl = document.querySelector<HTMLButtonElement>('.identity-control[aria-expanded="true"]')
        closeMenus()
        openControl?.focus()
      }
    }
    document.addEventListener("pointerdown", outside)
    document.addEventListener("keydown", keydown)
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", keydown) }
  }, [identityMenuOpen, languageMenuOpen])
  const [feedback, setFeedback] = useState<LessonReaction | null>(null)
  const [reactionBursts, setReactionBursts] = useState<{ id: number; reaction: LessonReaction }[]>([])
  const burstSequence = useRef(0)
  const burstTimers = useRef(new Set<number>())
  useEffect(() => () => {
    burstTimers.current.forEach(timer => window.clearTimeout(timer))
  }, [])
  const [feedbackCounts, setFeedbackCounts] =
    useState<Record<LessonReaction, number>>({
      understood: 18,
      thinking: 6,
      insightful: 14,
      confused: 3,
      applause: 9,
    })
  const teacherSlide = liveMode ? Math.max(1, Math.min(19, Number(room.state.slide) || 1)) : 17
  const totalSlides = lessonPages.length
  const [viewedSlide, setViewedSlide] = useState(1)
  const [followingTutor, setFollowingTutor] = useState(false)
  const [hasTeacherCommand, setHasTeacherCommand] = useState(false)
  const lastTeacherCommand = useRef<string | null>(null)
  const [historicalActivityId, setHistoricalActivityId] = useState<string | null>(null)
  useEffect(() => {
    if (reviewSlide) { setFollowingTutor(false); setViewedSlide(reviewSlide.page); setHistoricalActivityId(reviewSlide.activityId || null); setPeerView(false) }
  }, [reviewSlide])
  const isFollowingTutor = liveMode && followingTutor && !historicalActivityId
  const activity = activities.find((item) => item.page === viewedSlide)
  const sourceSlide = sourceSlideForPage(viewedSlide)
  const remoteActivityId = liveMode ? historicalActivityId || (isFollowingTutor ? room.state.activityId : null) : null
  const remoteActivity = room.activities.find(item => item.id === remoteActivityId)
  const originalCaption = sourceSlide === 13 || sourceSlide === 14
    ? ["Use research insights to reframe the design problem.", "运用研究洞察重构设计问题。"]
    : slideCaptions[(sourceSlide >= 16 ? sourceSlide + 2 : sourceSlide) - 1] || slideCaptions[0]
  const captions = remoteActivityId ? remoteActivity?.kind === "discussion" ? slideCaptions[15]
    : remoteActivity?.kind === "artefact" ? slideCaptions[16]
    : remoteActivity?.kind === "reflection" ? [remoteActivity.spec?.question || "Reflect on your learning.", "回顾你的学习，并分享思考。"]
    : remoteActivity?.kind === "qa" ? ["Share a question with your tutor and classmates.", "向老师和同学提出你的问题。"]
    : ["Use research evidence to answer your tutor’s concept check.", "运用研究证据回答老师发布的概念题。"]
    : activity ? activity.kind === "choice" ? slideCaptions[12] : activity.kind === "rating" ? slideCaptions[13] : activity.kind === "discussion" ? slideCaptions[15] : slideCaptions[16] : originalCaption
  useEffect(() => {
    if (!liveMode) { lastTeacherCommand.current = null; return }
    const command = JSON.stringify([room.state.slide || 1, room.state.activityId || null, room.state.activityKind || null, room.state.updatedAt || null])
    // The initial snapshot is a baseline, not a new teacher command. Periodic
    // snapshots and classmates' actions never interrupt independent browsing.
    if (lastTeacherCommand.current === null) { lastTeacherCommand.current = command; return }
    if (lastTeacherCommand.current === command) return
    lastTeacherCommand.current = command
    setHasTeacherCommand(true); setFollowingTutor(true)
    setViewedSlide(pageForSlide(teacherSlide)); setHistoricalActivityId(null); setPeerView(false)
  }, [liveMode, teacherSlide, room.state.activityId, room.state.activityKind, room.state.updatedAt])
  useEffect(() => {
    if (liveMode) setQuestionList(current => [
      ...current.filter(question => question.sendError && !room.questions.some(row => row.id === question.id)),
      ...room.questions.map(row => classroomQuestion(row, room.identity)),
    ])
  }, [liveMode, room.questions])
  const previousReactionCounts = useRef<Record<string, number> | null>(null)
  const [reactionPops, setReactionPops] = useState<Record<string, number>>({})
  useEffect(() => {
    if (!liveMode) return
    const map = { got: "understood", think: "thinking", confused: "confused", insight: "insightful", applause: "applause" } as const
    const counts = { understood: 0, thinking: 0, confused: 0, insightful: 0, applause: 0 }
    for (const reaction of room.reactions) if (map[reaction.kind]) counts[map[reaction.kind]]++
    const previous = previousReactionCounts.current
    if (previous) setReactionPops(current => {
      const next = { ...current }
      for (const key of Object.keys(counts) as LessonReaction[]) if (counts[key] > previous[key]) next[key] = (next[key] || 0) + 1
      return next
    })
    previousReactionCounts.current = counts
    setFeedbackCounts(counts)
  }, [liveMode, room.reactions])

  function goToPage(page: number) {
    setFollowingTutor(false)
    setHistoricalActivityId(null)
    setViewedSlide(Math.max(1, Math.min(totalSlides, page)))
    setPeerView(false)
  }

  function returnToTutor() {
    setFollowingTutor(true); setHasTeacherCommand(true)
    setHistoricalActivityId(null); setViewedSlide(pageForSlide(teacherSlide)); setPeerView(false)
  }
  useEffect(() => {
    if (!active) return
    function navigate(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || target?.closest("input, textarea, select, [contenteditable], dialog, [role=menu]")) return
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault(); goToPage(viewedSlide + (event.key === "ArrowRight" ? 1 : -1))
      }
    }
    window.addEventListener("keydown", navigate)
    return () => window.removeEventListener("keydown", navigate)
  }, [active, viewedSlide])

  function sendFeedback(next: LessonReaction) {
    if (room.identity) {
      const map = { understood: "got", thinking: "think", confused: "confused", insightful: "insight", applause: "applause" } as const
      void room.api.sendReaction(map[next])
    }
    const id = ++burstSequence.current
    setReactionBursts(current => [...current.slice(-7), { id, reaction: next }])
    const timer = window.setTimeout(() => {
      setReactionBursts(current => current.filter(burst => burst.id !== id))
      burstTimers.current.delete(timer)
    }, 1900)
    burstTimers.current.add(timer)
    if (feedback === next) return
    if (!liveMode) setFeedbackCounts((current) => {
      const updated = { ...current, [next]: current[next] + 1 }
      if (feedback) updated[feedback] = Math.max(0, current[feedback] - 1)
      return updated
    })
    setFeedback(next)
  }

  const questionSending = useRef(false)
  async function submitQuestion() {
    if (!composer.trim() || questionSending.current) return
    const text = composer.trim()
    const id = room.identity ? crypto.randomUUID() : Date.now()
    if (room.identity) {
      try {
        const key = `studio-bridge-questions:${room.identity.clientId}`
        const ids: string[] = JSON.parse(localStorage.getItem(key) || "[]")
        localStorage.setItem(key, JSON.stringify([...ids, id]))
      } catch { /* Questions can still be sent without local storage. */ }
    }
    const anonymous = room.identity?.anonymous || identity === "anonymous"
    const local: ClassroomQuestion = { id, slide: sourceSlide, name: anonymous ? "Anonymous" : studentName, initials: anonymous ? "A" : studentName.slice(0,2).toUpperCase(), time: "now", text, votes: 1, same: 0, answered: false, sendError: Boolean(room.identity) }
    setQuestionList(current => [local, ...current]); setComposer("")
    onLearningEntry({ id: `live-question-${id}`, kind: "Question", title: text, detail: "Your question · Just asked in class", slide: sourceSlide, week: room.session?.week || 6 })
    if (!room.identity) { notify("Your question was added to the demo."); return }
    questionSending.current = true
    try {
      const result = await room.api.askQuestion({ id: String(id), text, anonymous, slide: sourceSlide, lang: /[\u3400-\u9fff]/.test(text) ? "zh" : questionLanguage })
      if (result.data) { setQuestionList(current => [classroomQuestion(result.data!, room.identity), ...current.filter(q => q.id !== id)]); notify("Your question was sent to your tutor.") }
      else notify("Question kept on this device. Retry to send.")
    } finally { questionSending.current = false }
  }
  async function retryQuestion(question: ClassroomQuestion) {
    const result = await room.api.askQuestion({ id: String(question.id), text: question.text, anonymous: question.name === "Anonymous", slide: question.slide, lang: /[\u3400-\u9fff]/.test(question.text) ? "zh" : "en" })
    if (result.data) setQuestionList(current => current.map(q => q.id === question.id ? classroomQuestion(result.data!, room.identity) : q))
  }
  async function voteQuestion(question: ClassroomQuestion) {
    if (!room.identity) { setQuestionList(current => current.map(q => q.id === question.id ? { ...q, votes: q.votes + 1 } : q)); return }
    if (!question.dbId) return
    const result = await room.api.upvoteQuestion(question.dbId)
    if (result.data) setQuestionList(current => current.map(q => q.id === question.id ? classroomQuestion(result.data!, room.identity) : q))
  }

  useEffect(() => {
    if (!liveMode) return
    const grouped: Record<string, { id: string; text: string; name: string; english?: string }[]> = {}
    for (const row of room.responses) {
      if (row.kind !== "qa_reply" || typeof row.payload.questionId !== "string") continue
      const parent = row.payload.questionId
      ;(grouped[parent] ||= []).push({ id: row.id, text: String(row.payload.text || ""), english: typeof row.payload.text_en === "string" ? row.payload.text_en : undefined, name: displayStudent(row.student, room.identity, row.payload.clientId) })
    }
    setQuestionReplies(current => {
      const next = { ...current }
      for (const [parent, rows] of Object.entries(grouped)) next[parent] = [...rows, ...(current[parent] || []).filter(local => !rows.some(row => row.id === local.id))]
      return next
    })
  }, [liveMode, room.responses])
  function submitQuestionReply(question: ClassroomQuestion) {
    const text = (replyDrafts[question.id] || "").trim()
    if (!text) return
    const id = crypto.randomUUID()
    setQuestionReplies(current => ({
      ...current,
      [question.id]: [...(current[question.id] || []), { id, text, name: identity === "anonymous" ? "You · Anonymous" : `You · ${studentName}` }],
    }))
    if (room.identity && question.dbId) {
      void room.api.replyToQuestion({ id, questionId: question.dbId, text }).then(result => {
        if (result.error) { setReplyDrafts(current => ({ ...current, [question.id]: text })); notify("Reply kept on this device. Please retry when connected.") }
      })
    }
    setReplyDrafts(current => ({ ...current, [question.id]: "" }))
    onLearningEntry({ id: `live-response-${id}`, kind: "Response", title: text, detail: `Your reply to ${question.name} · ${question.translation || question.text}`, slide: question.slide, week: 6 })
  }

  const pageNavigation = (
    <nav
      className="presentation-arrows glass"
      aria-label="Slides and activities"
    >
      <button
        aria-label="Previous page"
        className="presentation-arrow previous"
        disabled={viewedSlide <= 1}
        onClick={() => goToPage(viewedSlide - 1)}
        type="button"
      >
        <Icon name="chevron" size={18} />
      </button>
      <span className="presentation-page" aria-live="polite" aria-atomic="true">
        {viewedSlide} <span>/ {totalSlides}</span>
      </span>
      <button
        aria-label="Next page"
        className="presentation-arrow"
        disabled={viewedSlide >= totalSlides}
        onClick={() => goToPage(viewedSlide + 1)}
        type="button"
      >
        <Icon name="chevron" size={18} />
      </button>
    </nav>
  )

  return (
    <main
      className={
        questionsOpen ? "live-layout" : "live-layout questions-collapsed"
      }
    >
      <section className="lesson-pane">
        <div className="session-heading">
          <div className="session-copy">
            <div className="eyebrow tutorial-label">IDEA9106 Tutorial 2</div>
            <h1>Week 6: Personas &amp; Reframing</h1>
            <p>{liveMode ? `${room.session?.unit || "IDEA9106"} · Week ${room.session?.week || 6}` : "Dr. Priya Nair · 42 students"}</p>
            <ClassBadge />
          </div>
          <div className="session-actions">
            {isFollowingTutor ? (
              <span className="presentation-live">
                <span className="live-dot" /> Following tutor
              </span>
            ) : !hasTeacherCommand && !historicalActivityId ? (
              <span className="presentation-live">Browse freely</span>
            ) : (
              <button
                className="presentation-back-live"
                onClick={returnToTutor}
                type="button"
              >
                <span className="live-dot" /> Back to live
              </button>
            )}
          </div>
        </div>
        <div className="lesson-content">
          <div className="slide-stage">

            <div className="slide-surface">
              {remoteActivityId ? (
                <section className="slide embedded-activity" aria-label="Live class activity">
                  <header className="embedded-activity-header"><span><Icon name="grid" size={16} />Class activity</span><div className="class-activity-navigation">{pageNavigation}</div></header>
                  {remoteActivity ? <TutorActivity key={`${remoteActivity.id}:${remoteActivity.kind}`} activity={remoteActivity} onRecorded={onLearningEntry} /> : <div className="tutor-activity"><h3>Your activity is getting ready.</h3><p>Waiting for your tutor’s activity…</p></div>}
                </section>
              ) : activity ? (
                <section
                  className="slide embedded-activity"
                  aria-label={`Page ${viewedSlide}: ${activityTemplates[activity.kind].title}`}
                >
                  <header className="embedded-activity-header">
                    <span>
                      <Icon name={peerView ? "bubble" : "grid"} size={16} />
                      {peerView ? "Peer responses" : "Class activity · Practice"}
                    </span>
                    <small>
                      Activity {activities.indexOf(activity) + 1} of{" "}
                      {activities.length}
                    </small>
                  </header>
                  {activity.kind === "discussion" || activity.kind === "artefact" ? (
                    <ExtraActivity key={activity.id} active={active} activity={activity} dispatch={dispatchActivity} />
                  ) : peerView && activity.submitted ? (
                    <div className="embedded-activity-peers">
                      <ActivityPeerResponses
                        key={activity.id}
                        activity={activity}
                        discussion={peerDiscussions[activity.id]}
                        dispatch={dispatchPeerDiscussion}
                        onPosted={(text) => onLearningEntry({ id: `live-response-${Date.now()}`, kind: "Response", title: text, detail: "Your contribution · Peer discussion", slide: activity.page, week: 6 })}
                        onBack={() => setPeerView(false)}
                        navigation={pageNavigation}
                      />
                    </div>
                  ) : (
                    <div className="embedded-activity-body" key={activity.id}>
                      <ActivityContent
                        activity={activity}
                        onReturn={() => goToPage(viewedSlide + 1)}
                        onSelect={(answer) =>
                          dispatchActivity({
                            type: "select",
                            id: activity.id,
                            answer,
                          })
                        }
                        onSubmit={() => submitActivity(activity)}
                        onViewPeers={() => openPeerResponses(activity)}
                        returnLabel="Continue to next page"
                      />
                    </div>
                  )}
                </section>
              ) : (
                <div
                  className={
                    isFollowingTutor ? "slide" : "slide viewing-history"
                  }
                >
                  <img
                    alt={`IDEA9106 Week 6 tutorial slide ${sourceSlide}`}
                    className="slide-image"
                    src={`/assets/slides/week6/page-${String(sourceSlide).padStart(2, "0")}.jpg`}
                  />
                </div>
              )}
              {!remoteActivityId && !(peerView && activity?.submitted) && pageNavigation}
              {activity && activity.kind !== "discussion" && activity.kind !== "artefact" && !activity.submitted && (
                <button
                  className="activity-submit activity-floating-submit"
                  disabled={activity.answer === null}
                  onClick={() => submitActivity(activity)}
                  type="button"
                >
                  Submit response <Icon name="arrow" size={16} />
                </button>
              )}
            </div>
          </div>
          <section
            className="lesson-tools"
            aria-label="Live translation captions and lesson feedback"
          >
            <div
              className="live-captions"
              aria-label="Live translation"
            >
              <span className="caption-indicator" aria-hidden="true">
                <Icon name="globe" size={14} />
              </span>
              <div className="caption-lines" aria-live="polite">
                <p lang="en">{captions[0]}</p>
                <p lang="zh-CN">{captions[1]}</p>
              </div>
            </div>
            <div
              className="live-feedback"
              role="group"
              aria-label="How is this landing? Quick lesson feedback"
            >
              <span className="sr-only" role="status">
                {feedback
                  ? `${lessonReactions.find((reaction) => reaction.id === feedback)?.label} selected`
                  : ""}
              </span>
              <div className="feedback-actions">
                {lessonReactions.map((reaction) => (
                  <button
                    aria-label={reaction.label}
                    aria-pressed={feedback === reaction.id}
                    className={feedback === reaction.id ? "selected" : ""}
                    key={reaction.id}
                    onClick={() => sendFeedback(reaction.id)}
                    title={`${reaction.label} — ${reaction.description}`}
                    type="button"
                  >
                    <span aria-hidden="true" className="feedback-emoji">
                      {reaction.emoji}
                    </span>
                    {reactionBursts.filter(burst => burst.reaction === reaction.id).map(burst =>
                      <span className="reaction-burst" key={burst.id} aria-hidden="true">
                        {[-2, -1, 0, 1, 2].map((direction, index) =>
                          <span className="feedback-particle" key={direction} style={{
                            "--drift": `${direction * 24}px`,
                            "--rise": `${105 + (2 - Math.abs(direction)) * 22}px`,
                            "--tilt": `${direction * 13}deg`,
                            animationDelay: `${index * 55}ms`,
                          } as CSSProperties}>{reaction.emoji}</span>
                        )}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      {questionsOpen && (
        <aside id="live-questions" className="questions-pane" aria-label="Questions sidebar">
          <header className="questions-header">
            <BulbIcon size={20} />
            <h2>Questions</h2>
            <span className="count-badge">{questionList.length + (liveMode ? 0 : 21)}</span>
          </header>
          <div className="questions-panel" id="questions-panel">
            <div className="questions-list">
              {questionList.map((question) => (
                <article className={question.answered ? "question-card answered" : "question-card"} key={question.id}>
                  <div className="question-meta">
                    <span className={`avatar avatar-${String(question.id).charCodeAt(0) % 3}`}>
                      {question.initials}
                    </span>
                    <div>
                      <strong>{question.name}</strong>
                      <small>{question.time} ago</small>
                    </div>

                    {question.answered && (
                      <span className="question-answer-mark" role="img" aria-label="Answered verbally in class" title={question.answeredAt ? `Answered verbally · ${question.answeredAt}` : "Answered verbally in class"}>
                        <Icon name="check" size={15} />
                      </span>
                    )}
                  </div>
                  <p className="question-text" lang={"translation" in question && question.translation ? "en" : undefined}>
                    {"translation" in question && question.translation ? question.translation : question.text}
                  </p>
                  {"translation" in question && question.translation && (
                    <>
                    <div className="question-translation-info">
                      <span>
                        <Icon name="globe" size={13} />
                        Translated from {question.sourceLanguage}
                      </span>
                      <button
                        type="button"
                        aria-expanded={originalQuestions.includes(question.id)}
                        aria-controls={`question-original-${question.id}`}
                        onClick={() => setOriginalQuestions((current) => current.includes(question.id)
                          ? current.filter((id) => id !== question.id)
                          : [...current, question.id])}
                      >
                        {originalQuestions.includes(question.id) ? "Hide original" : "View original"}
                      </button>
                    </div>
                    {originalQuestions.includes(question.id) && (
                      <div className="translation question-original" id={`question-original-${question.id}`}>
                        <small>{question.sourceLanguage} · Original</small>
                        <p lang={question.sourceLanguage === "Chinese" ? "zh-CN" : undefined}>{question.text}</p>
                      </div>
                    )}
                    </>
                  )}
                  {question.tutorAnswer && <div className="question-tutor-answer"><strong>Tutor’s answer</strong><p>{question.tutorAnswer}</p></div>}
                  {question.sendError && <div className="class-send-note">Not sent · <button type="button" onClick={() => void retryQuestion(question)}>Retry sending</button></div>}
                  <div className="question-actions">
                    <button
                      onClick={() => void voteQuestion(question)}
                      aria-label="Upvote question"
                      type="button"
                    >
                      <span className="up-arrow" aria-hidden="true">↑</span> {question.votes}
                    </button>
                    <button type="button" aria-expanded={replyQuestion === question.id} aria-controls={`question-reply-${question.id}`} onClick={() => setReplyQuestion(current => current === question.id ? null : question.id)}>
                      <Icon name="bubble" size={14} /> Reply{questionReplies[question.id]?.length ? ` · ${questionReplies[question.id].length}` : ""}
                    </button>
                  <div className="question-context">
                    <button
                      className="question-slide-link"
                      onClick={() => goToPage(pageForSlide(question.slide))}
                      type="button"
                      aria-label={`Go to slide ${question.slide}`}
                      title={`Go to slide ${question.slide}`}
                    >
                      <Icon name="slide" size={13} />
                      <span>Slide {question.slide}</span>
                      <Icon name="chevron" size={11} />
                    </button>

                  </div>
                  </div>

                  {replyQuestion !== question.id && questionReplies[question.id]?.length > 0 && <div className="question-replies classroom-inline-replies">{questionReplies[question.id].map(reply => <div className="question-reply-message" key={reply.id}><small>{reply.name}</small><SharedText text={reply.text} english={reply.english} /></div>)}</div>}
                  {replyQuestion === question.id && (
                    <div className="question-reply-panel" id={`question-reply-${question.id}`}>
                      <div className="question-replies" aria-live="polite">
                        {(questionReplies[question.id] || []).map(reply => (
                          <div className="question-reply-message" key={reply.id}>
                            <small>{reply.name}</small>
                            <SharedText text={reply.text} english={reply.english} />
                          </div>
                        ))}
                      </div>
                      <form className="question-reply-composer" onSubmit={event => { event.preventDefault(); submitQuestionReply(question) }}>
                        <textarea
                          autoFocus
                          aria-label={`Reply to ${question.name}`}
                          placeholder={`Reply to ${question.name}…`}
                          value={replyDrafts[question.id] || ""}
                          onChange={event => setReplyDrafts(current => ({ ...current, [question.id]: event.target.value }))}
                          onKeyDown={event => {
                            if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
                              event.preventDefault()
                              event.currentTarget.form?.requestSubmit()
                            }
                            if (event.key === "Escape") setReplyQuestion(null)
                          }}
                          rows={1}
                        />
                        <button type="submit" aria-label="Send reply" title="Send reply" disabled={!(replyDrafts[question.id] || "").trim()}><Icon name="arrow" size={16} /></button>
                      </form>
                    </div>
                  )}
                </article>
              ))}
            </div>
            <div className="ask-composer glass">
              <textarea
                onChange={(event) => setComposer(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing && event.keyCode !== 229) {
                    event.preventDefault()
                    void submitQuestion()
                  }
                }}
                placeholder={
                  questionLanguage === "zh" ? "用中文提问…" : "Ask a question…"
                }
                value={composer}
              />
              <div>
                <div className="composer-control-wrap">
                  <button
                    aria-haspopup="menu"
                    aria-expanded={identityMenuOpen}
                    className="identity-control"
                    onClick={() => {
                      setIdentityMenuOpen(!identityMenuOpen)
                      setLanguageMenuOpen(false)
                    }}
                    type="button"
                  >
                    <Icon name="person" size={14} />{" "}
                    {identity === "anonymous" ? "Anonymous" : studentName}{" "}
                    <span>⌄</span>
                  </button>
                  {identityMenuOpen && (
                    <ComposerMenu className="composer-menu identity-menu glass">
                      <div className="composer-menu-heading">
                        <strong>Ask as</strong>
                        <small>You can change this anytime</small>
                      </div>
                      <button
                        className={identity === "anonymous" ? "selected" : ""}
                        onClick={() => {
                          setIdentity("anonymous")
                          setIdentityMenuOpen(false)
                        }}
                        role="menuitemradio"
                        aria-checked={identity === "anonymous"}
                        type="button"
                      >
                        <span className="menu-option-icon anonymous-option">
                          <Icon name="person" size={16} />
                        </span>
                        <span>
                          <strong>Anonymous</strong>
                          <small>Your name won’t be shown</small>
                        </span>
                        {identity === "anonymous" && (
                          <Icon name="check" size={13} />
                        )}
                      </button>
                      <button
                        className={identity === "named" ? "selected" : ""}
                        onClick={() => {
                          setIdentity("named")
                          setIdentityMenuOpen(false)
                        }}
                        role="menuitemradio"
                        aria-checked={identity === "named"}
                        type="button"
                      >
                        <span className="menu-option-icon named-option">
                          {studentName.split(" ").map(part => part[0]).join("").slice(0,2)}
                        </span>
                        <span>
                          <strong>{studentName}</strong>
                          <small>Post with your name</small>
                        </span>
                        {identity === "named" && (
                          <Icon name="check" size={13} />
                        )}
                      </button>
                    </ComposerMenu>
                  )}
                </div>
                <div className="composer-control-wrap">
                  <button
                    aria-haspopup="menu"
                    aria-expanded={languageMenuOpen}
                    className="identity-control"
                    onClick={() => {
                      setLanguageMenuOpen(!languageMenuOpen)
                      setIdentityMenuOpen(false)
                    }}
                    type="button"
                  >
                    <Icon name="globe" size={14} />{" "}
                    {questionLanguage === "zh" ? "中文（简体）" : "English"}{" "}
                    <span>⌄</span>
                  </button>
                  {languageMenuOpen && (
                    <ComposerMenu className="composer-menu language-menu glass">
                      <div className="composer-menu-heading">
                        <strong>Question language</strong>
                        <small>Chinese is sent in its original language</small>
                      </div>
                      <button
                        className={questionLanguage === "zh" ? "selected" : ""}
                        onClick={() => {
                          setQuestionLanguage("zh")
                          setLanguageMenuOpen(false)
                        }}
                        role="menuitemradio"
                        aria-checked={questionLanguage === "zh"}
                        type="button"
                      >
                        <span className="menu-option-icon language-option">
                          中
                        </span>
                        <span>
                          <strong>中文（简体）</strong>
                          <small>Chinese, Simplified</small>
                        </span>
                        {questionLanguage === "zh" && (
                          <Icon name="check" size={13} />
                        )}
                      </button>
                      <button
                        className={questionLanguage === "en" ? "selected" : ""}
                        onClick={() => {
                          setQuestionLanguage("en")
                          setLanguageMenuOpen(false)
                        }}
                        role="menuitemradio"
                        aria-checked={questionLanguage === "en"}
                        type="button"
                      >
                        <span className="menu-option-icon language-option">
                          EN
                        </span>
                        <span>
                          <strong>English</strong>
                          <small>English</small>
                        </span>
                        {questionLanguage === "en" && (
                          <Icon name="check" size={13} />
                        )}
                      </button>
                    </ComposerMenu>
                  )}
                </div>
                <ActionButton
                  className="send"
                  onClick={submitQuestion}
                  title="Send question"
                >
                  <Icon name="arrow" size={16} />
                </ActionButton>
              </div>
            </div>
          </div>
        </aside>
      )}
    </main>
  )
}

export default function App() {
  const [activities, dispatchActivity] = useReducer(activityReducer, initialActivities)
  const room = useClassroom()
  const sharedActivities: LearningEntry[] | undefined = room.identity ? [...activities.map(activity => ({ id: `practice-${activity.id}`, kind: "Activity" as const, title: activityTemplates[activity.kind].title, detail: activity.submitted ? `Practice response · ${activityAnswer(activity)}` : "Practice activity · Explore at your own pace", slide: activity.page, week: room.session?.week || 6, completed: activity.submitted, image: activity.photo?.url })), ...room.activities.map(activity => {
    const own = room.responses.filter(row => row.activity_id === activity.id && row.payload.clientId === room.identity?.clientId)
    const photo = own.find(row => row.kind === "artefact")
    const questions = activity.spec?.questions || []
    const completed = activity.kind === "concept" ? questions.length > 0 && questions.every((_, q) => own.some(row => row.payload.q === q && ["choice", "rating", "open"].includes(row.kind))) : own.some(row => row.kind === activity.kind)
    return { id: activity.id, kind: "Activity" as const, title: activity.kind === "concept" ? "Concept check" : activity.kind === "reflection" ? activity.spec?.question || "Class reflection" : activity.kind === "discussion" ? "Discuss with your peers." : activity.kind === "artefact" ? "Your group artefact" : "Class Q&A", detail: completed ? "Your response · Sent to your tutor" : "Open this activity when your tutor makes it live.", slide: activity.slide || 1, week: room.session?.week || 6, completed, image: photo ? String(photo.payload.url || "") : undefined }
  })] : undefined
  let ownedQuestionIds: string[] = []
  try { ownedQuestionIds = JSON.parse(localStorage.getItem(`studio-bridge-questions:${room.identity?.clientId}`) || "[]") } catch { /* Optional history. */ }
  const restoredQuestions: LearningEntry[] = room.questions.filter(question => ownedQuestionIds.includes(question.id)).map(question => ({ id: `live-question-${question.id}`, kind: "Question", title: question.text_en || question.text, detail: question.status === "ans" ? "Your question · Answered in class" : "Your question · Shared in class", slide: question.slide || 1, week: room.session?.week || 6 }))
  const personalEntries: LearningEntry[] = room.identity ? room.responses.filter(row => row.payload.clientId === room.identity?.clientId && ["peer_reply", "qa_reply"].includes(row.kind)).map(row => ({ id: `live-response-${row.id}`, kind: "Response", title: String(row.payload.text || ""), detail: "Your reply · Shared in class", slide: room.activities.find(a => a.id === row.activity_id)?.slide || 1, week: room.session?.week || 6 })) : []
  const [section, setSection] = useState<Section>("live")
  const [questionsOpen, setQuestionsOpen] = useState(true)
  const [learningEntries, setLearningEntries] = useState(initialLearningEntries)
  const [reviewSlide, setReviewSlide] = useState<{page: number; request: number; activityId?: string} | null>(null)
  function reviewLearningSlide(page: number) { setReviewSlide({page: pageForSlide(page), request: Date.now()}); setSection("live") }
  function recordLearning(entry: LearningEntry) { setLearningEntries(current => [entry, ...current.filter(e => e.id !== entry.id)]) }
  const [toast, setToast] = useState("")
  const toastTimer = useMemo(() => ({ current: 0 }), [])
  function notify(message: string) {
    setToast(message)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(""), 2600)
  }
  return (
    <div className="desktop">
      <div className="app-window">
        <Sidebar section={section} setSection={setSection} />
        <div className="app-main">
          {section === "live" && (
            <button
              className="floating-panel-toggle"
              type="button"
              aria-label={questionsOpen ? "Hide questions sidebar" : "Show questions sidebar"}
              aria-expanded={questionsOpen}
              aria-controls="live-questions"
              title={questionsOpen ? "Hide questions" : "Show questions"}
              onClick={() => setQuestionsOpen(current => !current)}
            >
              <BulbIcon size={24} />
            </button>
          )}
          <div className="live-view-container" hidden={section !== "live"}>
            <LiveView active={section === "live"} notify={notify} questionsOpen={questionsOpen} onLearningEntry={recordLearning} reviewSlide={reviewSlide} activities={activities} dispatchActivity={dispatchActivity} />
          </div>
          <div className="learning-view-container" hidden={section !== "learning"}>
            <MyLearning activities={room.identity ? [] : activities} sharedActivities={sharedActivities} onReviewActivity={(activityId, page) => { setReviewSlide({page: /^(practice|activity)-/.test(activityId) ? page : pageForSlide(page), activityId: /^(practice|activity)-/.test(activityId) ? undefined : activityId, request: Date.now()}); setSection("live") }} entries={room.identity ? [...restoredQuestions, ...personalEntries, ...learningEntries.filter(entry => (entry.id.startsWith("live-question") || entry.id.startsWith("live-response")) && ![...personalEntries, ...restoredQuestions].some(p => p.id === entry.id))] : learningEntries} onReviewSlide={reviewLearningSlide}
              onShareReflection={room.state.activityId && room.activities.find(a => a.id === room.state.activityId)?.kind === "reflection" ? async text => {
                const result = await room.api.submitResponse({ activityId: room.state.activityId!, kind: "reflection", payload: { text, lang: /[\u3400-\u9fff]/.test(text) ? "zh" : "en" } })
                return result.error || "Reflection sent to your tutor ✓"
              } : undefined} />
          </div>
        </div>
      </div>
      {toast && (
        <div className="toast">
          <span>
            <Icon name="check" size={14} />
          </span>
          {toast}
        </div>
      )}
    </div>
  )
}
```

## src/MyLearning.tsx

```tsx
import { ClassBadge } from "./ClassRoom"
import { activityAnswer, activityTemplates, type ActivityRun } from "./activity-state"
import { useState } from "react"
import "./my-learning.css"

export type LearningEntry = {
  id: string
  kind: "Question" | "Response" | "Activity"
  title: string
  detail: string
  slide: number
  week: number
  completed?: boolean
  image?: string
}

export const initialLearningEntries: LearningEntry[] = [
  { id: "q6", kind: "Question", title: "How do I separate a pattern from an assumption?", detail: "Your question · Discussed in class", slide: 10, week: 6 },
  { id: "r6", kind: "Response", title: "A persona needs evidence, not just a backstory.", detail: "Your reply to Maya · 3 classmates found it helpful", slide: 8, week: 6 },
  { id: "q5", kind: "Question", title: "Can a note belong to more than one cluster?", detail: "Your question · Discussed in class", slide: 10, week: 5 },
  { id: "r5", kind: "Response", title: "We grouped by behaviour rather than interview question.", detail: "Your reply · 2 classmates found it helpful", slide: 10, week: 5 },
]

const weekTopics: Record<number, { title: string; outcome: string; concept: string }> = {
  6: { title: "Personas & reframing", outcome: "Use research evidence to represent user needs and reframe a design problem.", concept: "Evidence → Patterns → Persona → Problem framing" },
  5: { title: "Finding patterns", outcome: "Synthesise research observations into patterns and meaningful insights.", concept: "Observations → Affinity mapping → Insights" },
  4: { title: "Listening to people", outcome: "Ask open-ended questions to understand people’s experiences and needs.", concept: "Curiosity → Interviews → Research evidence" },
}

function LearningIcon({ kind }: { kind: string }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "Question" ? <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-2 2v-10a9.5 9.5 0 0 1 19-.5Z" />
      : kind === "Response" ? <><path d="m4 12 5 5L20 6" /><path d="M20 13v6H4V3h11" /></>
      : kind === "badge" ? <><circle cx="12" cy="9" r="6" /><path d="m8 14-2 8 6-3 6 3-2-8M10 9l1.5 1.5L14 7" /></>
      : <><rect x="4" y="3" width="16" height="18" rx="3" /><path d="M8 8h8M8 12h5M8 16h8" /></>}
  </svg>
}

export default function MyLearning({ entries, activities, onReviewSlide, sharedActivities, onShareReflection, onReviewActivity }: { entries: LearningEntry[]; activities: ActivityRun[]; onReviewSlide: (page: number) => void; sharedActivities?: LearningEntry[]; onReviewActivity?: (id: string, page: number) => void; onShareReflection?: (text: string) => Promise<string> }) {
  const [week, setWeek] = useState(6)
  const [filter, setFilter] = useState("All")
  const [reflections, setReflections] = useState<Record<string, string>>(() => {
    try { return JSON.parse(localStorage.getItem("studio-bridge-reflections") || "{}") } catch { return {} }
  })
  const [saved, setSaved] = useState(false)
  const [badge, setBadge] = useState<string | null>(null)
  const liveClass = sharedActivities !== undefined
  const additions = liveClass ? entries.length : Math.max(0, entries.length - initialLearningEntries.length)
  const completedActivities = sharedActivities ? sharedActivities.filter(activity => activity.completed).length : activities.filter(activity => activity.submitted).length
  const [reflectionStatus, setReflectionStatus] = useState("")
  const [reflectionBusy, setReflectionBusy] = useState(false)
  const points = (liveClass ? 0 : 112) + (additions + completedActivities) * 4
  const activityEntries: LearningEntry[] = sharedActivities || activities.map(activity => ({
    id: `activity-${activity.id}`, kind: "Activity", title: activityTemplates[activity.kind].title,
    detail: activity.submitted ? `Your response · ${activityAnswer(activity)}` : activityTemplates[activity.kind].description,
    slide: activity.page, week: 6, completed: activity.submitted, image: activity.submitted ? activity.photo?.url : undefined,
  }))
  const replies = entries.filter(e => e.id.startsWith("live-response")).length
  const newQuestions = entries.filter(e => e.id.startsWith("live-question")).length
  const milestones = Math.min(12, (liveClass ? 0 : 8) + completedActivities)
  const visible = [...entries, ...activityEntries].filter(e => e.week === week && (filter === "All" || e.kind === filter))
  const topic = weekTopics[week]
  const [draft, setDraft] = useState(reflections["6"] || "")
  function changeWeek(next: number) {
    setReflections(current => ({ ...current, [week]: draft }))
    setDraft(reflections[next] || "")
    setWeek(next)
    setSaved(false)
  }
  async function saveReflection() {
    if (reflectionBusy) return
    const next = { ...reflections, [week]: draft }
    setReflections(next)
    try { localStorage.setItem("studio-bridge-reflections", JSON.stringify(next)) } catch { /* The active reflection remains editable. */ }
    if (onShareReflection) {
      setReflectionBusy(true)
      try { setReflectionStatus(await onShareReflection(draft)) } finally { setReflectionBusy(false) }
    }
    setSaved(true)
  }
  return <main className="learning-page">
    <header className="learning-intro">
      <div><div className="eyebrow">IDEA9106 · DESIGN THINKING</div><h1>My Learning</h1><p>A little curiosity, a clearer perspective. See how far you’ve come.</p></div>
      <div><span className="learning-term"><span className="live-dot" /> Week 6 of 12</span><ClassBadge /></div>
    </header>
    <div className="learning-columns">
      <div className="learning-overview">
        <section className="learning-card journey-card">
          <div className="learning-card-top"><h2>Your learning journey</h2><span className="learning-points">{points}<small> points</small><button type="button" className="points-help" aria-label="How to earn points" aria-expanded={badge === "points"} aria-controls="points-guide" onClick={() => setBadge(badge === "points" ? null : "points")}>i</button></span></div>
          {badge === "points" && <section className="learning-disclosure" id="points-guide" aria-label="How to earn points">
            <div className="points-guide-heading"><div><strong>How to earn points</strong><p>Little contributions add up.</p></div><span>YOUR LEARNING</span></div>
            <div className="points-guide-list">
              <div className="points-guide-row"><span className="points-guide-icon"><LearningIcon kind="Question" /></span><div><strong>Ask a question</strong><small>Share what you’re curious about in Live.</small></div><b>+4 <small>pts</small></b></div>
              <div className="points-guide-row"><span className="points-guide-icon response"><LearningIcon kind="Response" /></span><div><strong>Join a peer discussion</strong><small>Post a reply or share your perspective.</small></div><b>+4 <small>pts</small></b></div>
              <div className="points-guide-row"><span className="points-guide-icon activity"><LearningIcon kind="Activity" /></span><div><strong>Complete a class activity</strong><small>Submit your response to a slide activity.</small></div><b>+4 <small>pts</small></b></div>
            </div>
            <p className="points-guide-note">Points celebrate participation and don’t affect your grades. Each activity earns points once.</p>
          </section>}
          <p className="learning-card-description">Small steps, growing understanding.</p>
          <div className="journey-track" role="progressbar" aria-label="Learning milestones" aria-valuenow={milestones} aria-valuemin={0} aria-valuemax={12}><span style={{ width: `${milestones / 12 * 100}%` }} /></div>
          <div className="journey-labels"><strong>{milestones} milestones reached</strong><span>12 milestones</span></div>
          <div className="learning-stats">
            <div><strong>{(liveClass ? 0 : 3) + newQuestions}</strong><span>Questions asked</span></div><div><strong>{(liveClass ? 0 : 6) + replies}</strong><span>Peer replies</span></div><div><strong>{completedActivities} / {sharedActivities?.length ?? activities.length}</strong><span>Class activities</span></div>
          </div>
          <div className="badge-section"><h3>Your badges <span>{liveClass ? Number(newQuestions > 0) + Number(replies > 0) : 2} earned</span></h3>
            <div className="learning-badges">
              {[["Helpful Peer", "Supporting classmates with useful replies.", "sage"], ["Curious Mind", "Asking thoughtful questions that open a discussion.", "lavender"]].map(([name, detail, tone]) =>
                <button type="button" key={name} className={`learning-badge ${tone}`} disabled={liveClass && (name === "Helpful Peer" ? replies === 0 : newQuestions === 0)} onClick={() => setBadge(badge === name ? null : name)} aria-expanded={badge === name}>
                  <span className="badge-medal"><LearningIcon kind="badge" /></span><span><strong>{name}</strong><small>{name === "Helpful Peer" ? "Learning together" : "Keep asking why"}</small></span>
                  {badge === name && <p>{detail}</p>}
                </button>)}
            </div>
          </div>
        </section>
        <section className="learning-card next-step">
          <div className="learning-card-top"><span className="eyebrow">AI Advice</span><LearningIcon kind="Activity" /></div>
          <h2>Try the concept in real life.</h2><p>Notice a frustrating everyday experience. What user need sits underneath it? Reframe it as a “How might we…” question.</p>
          <button type="button" onClick={() => onReviewSlide(15)}>Revisit problem framing <span aria-hidden="true">↗</span></button>
        </section>
        <section className="learning-card class-goal">
          <div className="learning-card-top"><h2>A shared class goal</h2><span className="learning-mini-tag">{liveClass ? "Example goal" : "Together"}</span></div>
          <p>Help our studio reach <strong>100 useful answers.</strong></p>
          <div className="class-goal-progress"><progress value="72" max="100" aria-label="Class useful answers" /><strong>72<span> / 100</span></strong></div>
          <small>{liveClass ? "Example progress · helpful-reply tracking is not provided by this class yet." : "Every helpful reply makes learning a little easier for someone."}</small>
        </section>
      </div>
      <div className="learning-week">
        <section className="learning-card weekly-activity">
          <div className="learning-card-top"><h2>Your activity</h2><label className="learning-week-picker"><span className="sr-only">Activity week</span><select value={week} onChange={e => changeWeek(Number(e.target.value))}>{[6, 5, 4].map(w => <option key={w} value={w}>Week {w}</option>)}</select></label></div>
          <p className="learning-card-description">{topic.title}</p>
          <div className="learning-filters" role="group" aria-label="Filter learning activity">{["All", "Question", "Response", "Activity"].map(f => <button type="button" key={f} aria-pressed={filter === f} className={filter === f ? "selected" : ""} onClick={() => setFilter(f)}>{f === "All" ? "All" : f === "Activity" ? "Activities" : f + "s"}</button>)}</div>
          <div className="learning-entry-list">
            {visible.map(entry => <article className="learning-entry" key={entry.id}>
              <span className={`learning-entry-icon ${entry.kind.toLowerCase()}`}><LearningIcon kind={entry.kind} /></span>
              <div><div className="learning-entry-meta"><small>{entry.kind}</small>{entry.kind === "Activity" && <span className={entry.completed ? "activity-record-status done" : "activity-record-status"}>{entry.completed ? "Submitted" : "To do"}</span>}</div><h3>{entry.title}</h3><p>{entry.detail}</p>{entry.image && <img className="learning-artefact-thumbnail" src={entry.image} alt="Your submitted group artefact" />}{week === 6 && <button type="button" onClick={() => entry.kind === "Activity" && onReviewActivity ? onReviewActivity(entry.id, entry.slide) : onReviewSlide(entry.slide)}>{entry.kind === "Activity" ? entry.completed ? "View response" : "Open activity" : "View slide"} · Slide {entry.slide} <span aria-hidden="true">↗</span></button>}</div>
            </article>)}
            {!visible.length && <p className="learning-empty">No {filter.toLowerCase()}s recorded for this week yet.</p>}
          </div>
        </section>
        <section className="learning-card reflection-card">
          <div className="learning-card-top"><h2>Your take</h2><span className="learning-mini-tag">Week {week}</span></div>
          <p className="learning-card-description">Make the connection in your own words.</p>
          <div className="learning-outcome"><span className="eyebrow">LEARNING OUTCOME</span><p>{topic.outcome}</p><span className="concept-chain">{topic.concept}</span></div>
          <label htmlFor="learning-reflection">What changed in your understanding?</label>
          <textarea id="learning-reflection" value={draft} onChange={e => { setDraft(e.target.value); setSaved(false) }} placeholder="One thing I understand differently now is… I could apply this by…" />
          <div className="reflection-footer"><span role="status">{reflectionStatus || (saved ? "Reflection saved on this device" : onShareReflection ? "Shared with your tutor when saved" : "Only visible to you")}</span><button type="button" disabled={!draft.trim() || reflectionBusy} onClick={() => void saveReflection()}>{reflectionBusy ? "Sending…" : saved ? "Saved ✓" : onShareReflection ? "Save & share reflection" : "Save reflection"}</button></div>
        </section>
      </div>
    </div>
  </main>
}
```

## src/ExtraActivity.tsx

```tsx
import { useEffect, useRef, useState, type ChangeEvent } from "react"
import { activityTemplates, type ActivityRun, type ActivityAction } from "./activity-state"
import "./extra-activity.css"

const cards = [
  { image: "agree", label: "Agree", prompt: "I agree with this idea because…" },
  { image: "disagree", label: "Disagree", prompt: "I see it differently because…" },
  { image: "turn", label: "Take a turn", prompt: "I’d like to add that…" },
  { image: "clarify", label: "Clarify", prompt: "I’m not sure I understand…" },
  { image: "idea", label: "Share an idea", prompt: "What if we tried…" },
]

function CameraIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m8 5 1-2h6l1 2h4a2 2 0 0 1 2 2v12H2V7a2 2 0 0 1 2-2Z"/><circle cx="12" cy="12" r="4"/></svg>
}

export default function ExtraActivity({ activity, dispatch, active, pending = false }: { pending?: boolean; active: boolean; activity: ActivityRun; dispatch: (action: ActivityAction) => void }) {
  const [announcement, setAnnouncement] = useState("")
  const [error, setError] = useState("")
  const [group, setGroup] = useState(activity.photo?.group || "")
  const [caption, setCaption] = useState(activity.photo?.caption || "")
  const [cameraOpen, setCameraOpen] = useState(false)
  const [cameraLoading, setCameraLoading] = useState(false)
  const video = useRef<HTMLVideoElement>(null)
  const camera = useRef<MediaStream | null>(null)
  const cameraRequest = useRef(0)
  const fileInput = useRef<HTMLInputElement>(null)
  const mounted = useRef(true)
  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
      cameraRequest.current++
      camera.current?.getTracks().forEach(track => track.stop())
    }
  }, [])
  useEffect(() => {
    if (cameraOpen && video.current && camera.current) {
      video.current.srcObject = camera.current
      video.current.play().catch(() => setError("Couldn’t start the camera preview. Please choose a photo instead."))
    }
  }, [cameraOpen])
  function stopCamera() {
    cameraRequest.current++
    camera.current?.getTracks().forEach(track => track.stop())
    camera.current = null
    setCameraOpen(false)
    setCameraLoading(false)
  }
  useEffect(() => { if (!active) stopCamera() }, [active])
  async function startCamera() {
    setError("")
    if (!navigator.mediaDevices?.getUserMedia) { setError("Camera access isn’t available here. You can still choose a photo."); return }
    const request = ++cameraRequest.current
    setCameraLoading(true)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false })
      if (!mounted.current || request !== cameraRequest.current) { stream.getTracks().forEach(track => track.stop()); return }
      camera.current = stream
      setCameraOpen(true)
    } catch {
      if (mounted.current && request === cameraRequest.current) setError("Camera access wasn’t granted. Allow it in your browser, or choose a photo.")
    } finally {
      if (mounted.current && request === cameraRequest.current) setCameraLoading(false)
    }
  }
  function setPhoto(url: string, name: string) {
    dispatch({ type: "photo", id: activity.id, photo: { url, name, group, caption } })
    setAnnouncement("Photo ready to preview.")
  }
  function capture() {
    if (!video.current?.videoWidth) { setError("The camera is still getting ready. Please try again."); return }
    const canvas = document.createElement("canvas")
    canvas.width = video.current.videoWidth
    canvas.height = video.current.videoHeight
    const context = canvas.getContext("2d")
    if (!context) return
    context.drawImage(video.current, 0, 0)
    setPhoto(canvas.toDataURL("image/jpeg", .9), "Group artefact.jpg")
    stopCamera()
  }
  function choosePhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    event.target.value = ""
    if (!file) return
    setError("")
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) { setError("Please choose a JPG, PNG or WebP photo."); return }
    if (file.size > 15 * 1024 * 1024) { setError("Please choose a photo smaller than 15 MB."); return }
    const reader = new FileReader()
    reader.onerror = () => setError("This photo couldn’t be read. Please try another file.")
    reader.onload = () => {
      if (!mounted.current || typeof reader.result !== "string") return
      const image = new Image()
      image.onload = () => { if (mounted.current) { stopCamera(); setPhoto(reader.result as string, file.name) } }
      image.onerror = () => { if (mounted.current) setError("This image couldn’t be opened. Please try another photo.") }
      image.src = reader.result
    }
    reader.readAsDataURL(file)
  }
  const template = activityTemplates[activity.kind]
  const counts = activity.cardCounts || [0, 0, 0, 0, 0]
  return <div className={`embedded-activity-body extra-activity extra-activity--${activity.kind}`}>
    <div className="extra-activity-title">
      <div><span className="eyebrow">{template.label}</span><h3>{template.title}</h3><p>{template.description}</p></div>
      <span className="extra-status">{activity.kind === "discussion" ? <><span className="live-dot" />{counts.reduce((a,b) => a+b, 0)} cards played</> : activity.submitted ? "✓ Submitted" : "Group upload"}</span>
    </div>
    {activity.kind === "discussion" ? <>
      <div className="discussion-card-grid">
        {cards.map((card, index) => <button
          type="button" disabled={pending} key={card.image}
          aria-label={`Play ${card.label} card. ${card.prompt}. ${counts[index]} played.`}
          className={activity.answer === index ? "discussion-card active" : "discussion-card"}
          onClick={() => { dispatch({ type: "play", id: activity.id, card: index }); setAnnouncement(`${card.label} card played. ${card.prompt}`) }}
        >
          <img src={`/assets/discussion/${card.image}.png`} alt={`${card.label}: ${card.prompt}`} />
          <span className="discussion-card-count">{counts[index]} played</span>
        </button>)}
      </div>
      <p className="discussion-instruction sr-only" role="status">{announcement}</p>
    </> : <>
      <input ref={fileInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp" onChange={choosePhoto} aria-label="Choose artefact photo" />
      <div className="artefact-layout">
        <div className="artefact-photo-area">
          {cameraOpen ? <div className="artefact-camera"><video ref={video} muted playsInline aria-label="Camera preview" /><div><button type="button" className="extra-primary" onClick={capture}>Capture photo</button><button type="button" onClick={stopCamera}>Cancel</button></div></div>
            : activity.photo ? <figure className="artefact-preview"><img src={activity.photo.url} alt={activity.photo.caption || "Your group’s artefact"} /><figcaption>{activity.photo.name}</figcaption></figure>
            : <div className="artefact-empty"><CameraIcon /><strong>Bring your group’s work into the discussion.</strong><p>A persona, sketch, affinity map or reframed brief.</p><div className="artefact-choose-actions"><button className="extra-primary" type="button" disabled={pending} onClick={() => fileInput.current?.click()}>Choose photo</button><button type="button" onClick={startCamera} disabled={cameraLoading || pending}>{cameraLoading ? "Opening camera…" : "Take a photo"}</button></div><small>JPG, PNG or WebP · Up to 15 MB</small></div>}
          {activity.photo && !activity.submitted && !cameraOpen && <div className="artefact-photo-actions"><button type="button" disabled={pending} onClick={() => fileInput.current?.click()}>Replace photo</button><button type="button" disabled={cameraLoading || pending} onClick={startCamera}>Retake with camera</button></div>}
        </div>
        <div className="artefact-details">
          <label>Group name <span>(optional)</span><input disabled={activity.submitted || pending} value={group} placeholder="e.g. Studio Team 4" onChange={event => { setGroup(event.target.value); if (activity.photo) dispatch({ type: "photo", id: activity.id, photo: { ...activity.photo, group: event.target.value } }) }}/></label>
          <label><span className="artefact-field-title">The thinking behind it <span>(optional)</span></span><textarea disabled={activity.submitted || pending} value={caption} placeholder="What did you make? Which research insight shaped it?" onChange={event => { setCaption(event.target.value); if (activity.photo) dispatch({ type: "photo", id: activity.id, photo: { ...activity.photo, caption: event.target.value } }) }} /></label>
          {!activity.submitted ? <button type="button" className="extra-primary" disabled={!activity.photo || cameraOpen || pending} onClick={() => { dispatch({ type: "submit", id: activity.id }); setAnnouncement("Your group artefact is submitted for this session.") }}>{pending ? "Sending…" : "Submit artefact"} <span aria-hidden="true">↑</span></button> : <div className="artefact-submitted">✓ Your group’s artefact is submitted.</div>}
          <small>Saved for this session.</small>
        </div>
      </div>
      {error && <p className="artefact-error" role="alert">{error}</p>}
      <span className="sr-only" role="status">{announcement}</span>
    </>}
  </div>
}
```

## src/activity-state.ts

```typescript
export type ActivityKind = "choice" | "rating" | "discussion" | "artefact"

export type ActivityRun = {
  id: number
  page: number
  kind: ActivityKind
  answer: number | null
  submitted: boolean
  cardCounts?: number[]
  photo?: { url: string; name: string; group: string; caption: string }
}

export const activityTemplates = {
  choice: {
    label: "Multiple choice",
    title: "What makes a useful persona?",
    description: "Think about the evidence behind the people you design for.",
    options: [
      "Patterns grounded in research with real users",
      "A detailed description of your ideal customer",
      "Assumptions based on age and demographics",
      "A fictional character that everyone agrees on",
    ],
  },
  discussion: { label: "Discussion", title: "Discuss with your peers.", description: "Use your cards to share what you think.", options: ["Agree", "Disagree", "Take a turn", "Clarify", "Share an idea"] },
  artefact: { label: "Group artefact", title: "Show what your group made.", description: "Capture your persona, reframed brief or a work-in-progress sketch.", options: [] },
  rating: {
    label: "Confidence check",
    title: "How confident are you with reframing?",
    description:
      "How ready do you feel to turn a research insight into a useful problem statement?",
    options: [],
  },
} satisfies Record<ActivityKind, {
  label: string
  title: string
  description: string
  options: string[]
}>

export const initialActivities: ActivityRun[] = [
  { id: 1, page: 3, kind: "choice", answer: null, submitted: false },
  { id: 2, page: 5, kind: "rating", answer: null, submitted: false },
  { id: 3, page: 7, kind: "discussion", answer: null, submitted: false },
  { id: 4, page: 9, kind: "artefact", answer: null, submitted: false },
]

export type ActivityAction = {
  type: "select"
  id: number
  answer: number
} | { type: "submit"; id: number } | { type: "play"; id: number; card: number } | { type: "photo"; id: number; photo: NonNullable<ActivityRun["photo"]> }

export function activityReducer(
  state: ActivityRun[],
  action: ActivityAction,
): ActivityRun[] {
  return state.map((run) => {
    if (run.id !== action.id) return run
    if (action.type === "play") {
      if (run.kind !== "discussion" || !Number.isInteger(action.card) || action.card < 0 || action.card > 4) return run
      const counts = [...(run.cardCounts || [0,0,0,0,0])]; counts[action.card]++
      return { ...run, answer: action.card, submitted: true, cardCounts: counts }
    }
    if (run.submitted) return run
    if (action.type === "photo") return run.kind === "artefact" ? { ...run, photo: action.photo } : run
    if (action.type === "submit") {
      return (run.kind === "artefact" ? !run.photo : run.answer === null) ? run : { ...run, submitted: true }
    }
    const min = run.kind === "rating" ? 1 : 0
    const max =
      run.kind === "rating" ? 5 : activityTemplates.choice.options.length - 1
    return Number.isInteger(action.answer) &&
      action.answer >= min &&
      action.answer <= max
      ? { ...run, answer: action.answer }
      : run
  })
}

export function activityAnswer(run: ActivityRun): string {
  if (run.kind === "artefact") return run.photo ? [run.photo.group, run.photo.name, run.photo.caption].filter(Boolean).join(" · ") : "No photo submitted"
  if (run.kind === "discussion") return run.submitted ? `${(run.cardCounts || []).reduce((a,b) => a+b,0)} cards played · Last card: ${activityTemplates.discussion.options[run.answer || 0]}` : "No cards played yet"
  if (run.answer === null) return "No response"
  return run.kind === "rating"
    ? `${run.answer} / 5`
    : activityTemplates.choice.options[run.answer]
}
```

## src/lesson-navigation.ts

```typescript
import type { ActivityKind } from "./activity-state"
export type LessonPage = { kind: "slide"; slide: number } | { kind: "activity"; activityKind: ActivityKind; afterSlide: number }
const practiceAfter: Partial<Record<number, ActivityKind>> = { 2: "choice", 3: "rating", 4: "discussion", 5: "artefact" }
export const lessonPages: LessonPage[] = Array.from({ length: 19 }, (_, index) => {
  const slide = index + 1
  const pages: LessonPage[] = [{ kind: "slide", slide }]
  const activityKind = practiceAfter[slide]
  if (activityKind) pages.push({ kind: "activity", activityKind, afterSlide: slide })
  return pages
}).flat()
export function pageForSlide(slide: number) {
  const safe = Math.max(1, Math.min(19, Math.trunc(slide) || 1))
  return lessonPages.findIndex(page => page.kind === "slide" && page.slide === safe) + 1
}
export function sourceSlideForPage(page: number) {
  const item = lessonPages[Math.max(0, Math.min(lessonPages.length - 1, page - 1))]
  return item.kind === "slide" ? item.slide : item.afterSlide
}
```

## src/supabase.ts

```typescript
import { createClient } from "@supabase/supabase-js"

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY
// Missing or malformed demo configuration must never prevent the local UI opening.
export const supabase = (() => {
  try {
    return url && key
      ? createClient(url, key, {
          auth: {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false,
          },
          global: {
            fetch: (input, init) =>
              fetch(input, {
                ...init,
                signal: init?.signal || AbortSignal.timeout(15000),
              }),
          },
        })
      : null
  } catch {
    return null
  }
})()
```

## src/class-types.ts

```typescript
export type ClassIdentity = {
  code: string
  name: string
  anonymous: boolean
  clientId: string
}
export type ClassState = {
  slide?: number
  activityId?: string | null
  activityKind?: string | null
  updatedAt?: string
}
export type ConceptQuestion = {
  level?: string
  label?: string
  type: "mc" | "scale" | "open"
  text: string
  options?: {
    t: string
    ok?: boolean
  }[]
  lo?: string
  hi?: string
  hint?: string
}
export type TutorActivity = {
  id: string
  session: string
  kind: "concept" | "qa" | "discussion" | "artefact" | "reflection"
  slide: number | null
  spec: {
    questions?: ConceptQuestion[]
    question?: string
    hint?: string
  }
}
export type ClassRow = {
  code: string
  unit: string | null
  week: number | null
  state: ClassState
}
export type QuestionRow = {
  id: string
  session: string
  student: string | null
  anonymous: boolean
  text: string
  text_en: string | null
  lang: string | null
  slide: number | null
  upvotes: number
  status: "open" | "ans"
  answer: string | null
  created_at: string
}
export type ResponseRow = {
  id: string
  session: string
  activity_id: string
  kind: string
  student: string | null
  team: string | null
  payload: Record<string, unknown>
  created_at: string
}
export type ReactionKind = "got" | "think" | "confused" | "insight" | "applause"
export type ReactionRow = {
  id: number
  session: string
  kind: ReactionKind
  student: string | null
  created_at: string
}
```

## src/class-api.ts

```typescript
import { supabase } from "./supabase"
import type {
  ClassIdentity,
  QuestionRow,
  ReactionKind,
  ResponseRow,
} from "./class-types"

export type SendResult<T> = {
  data: T | null
  error: string | null
}
export function createClassApi(
  identity: ClassIdentity | null,
  activityId: string | null,
  report: (message: string) => void,
) {
  const actor = identity?.anonymous ? "Anonymous" : identity?.name || "Student"
  async function action<T>(work: () => Promise<T>): Promise<SendResult<T>> {
    if (!identity || !supabase)
      return { data: null, error: "Not connected · saved on this device" }
    try {
      const data = await work()
      report("")
      return { data, error: null }
    } catch {
      const error =
        "Not connected · saved on this device. Retry to send to your tutor."
      report(error)
      return { data: null, error }
    }
  }
  async function log(type: string, payload: Record<string, unknown>) {
    const result = await supabase!
      .from("events")
      .insert({
        session: identity!.code,
        role: "student",
        type,
        actor,
        payload,
      })
    // A successful primary write is not retried just because the separate log failed.
    if (result.error)
      throw new Error("Action saved, but the activity log is unavailable")
  }
  async function logged<T>(
    type: string,
    payload: Record<string, unknown>,
    work: () => Promise<T>,
  ): Promise<SendResult<T>> {
    const result = await action(work)
    if (result.data) {
      try {
        await log(type, payload)
      } catch {
        report("Saved to class · activity log unavailable")
      }
    }
    return result
  }
  async function insertOnce<T>(
    table: string,
    row: Record<string, unknown>,
  ): Promise<T> {
    const result = await supabase!.from(table).insert(row).select().single()
    if (!result.error) return result.data as T
    // Stable client-generated UUIDs make retry safe if the server saved a request
    // but the browser lost the acknowledgement.
    if (result.error.code === "23505") {
      const old = await supabase!
        .from(table)
        .select()
        .eq("id", row.id)
        .eq("session", identity!.code)
        .single()
      if (!old.error) return old.data as T
    }
    throw result.error
  }
  return {
    askQuestion(input: {
      id?: string
      text: string
      anonymous: boolean
      slide: number
      lang?: string
      text_en?: string
    }) {
      const row = {
        ...input,
        id: input.id || crypto.randomUUID(),
        session: identity?.code,
        student: input.anonymous ? null : actor,
        anonymous: input.anonymous,
        text_en: input.text_en || null,
        upvotes: 1,
      }
      return logged<QuestionRow>(
        "question_asked",
        { question: row.id, slide: input.slide },
        () => insertOnce("questions", row),
      )
    },
    upvoteQuestion(id: string) {
      return logged<QuestionRow>(
        "question_upvoted",
        { question: id },
        async () => {
          const existing = await supabase!.from("questions").select("id").eq("session", identity!.code).eq("id", id).single()
          if (existing.error) throw existing.error
          const vote = await supabase!.rpc("upvote_question", { qid: id })
          if (vote.error) throw vote.error
          const next = await supabase!.from("questions").select().eq("session", identity!.code).eq("id", id).single()
          if (next.error) throw next.error
          return next.data as QuestionRow
        },
      )
    },
    replyToQuestion(input: { id: string; questionId: string; text: string }) {
      return logged<ResponseRow>("response_submitted", { response: input.id, kind: "qa_reply", questionId: input.questionId }, async () => {
        const parent = await supabase!.from("questions").select("id").eq("session", identity!.code).eq("id", input.questionId).single()
        if (parent.error) throw parent.error
        return insertOnce("responses", { id: input.id, session: identity!.code, activity_id: activityId || "none", kind: "qa_reply", student: actor, payload: { questionId: input.questionId, text: input.text, lang: /[\u3400-\u9fff]/.test(input.text) ? "zh" : "en", clientId: identity!.clientId } })
      })
    },
    sendReaction(kind: ReactionKind) {
      return logged("reaction_sent", { kind }, async () => {
        const result = await supabase!
          .from("reactions")
          .insert({ session: identity!.code, student: actor, kind })
          .select()
          .single()
        if (result.error) throw result.error
        return result.data
      })
    },
    submitResponse(input: {
      id?: string
      activityId: string
      kind: string
      payload: Record<string, unknown>
      team?: string
    }) {
      // A closed or replaced activity must never receive a late response.
      if (!activityId || input.activityId !== activityId)
        return Promise.resolve({
          data: null,
          error:
            "This activity is no longer live. Your response stays on this device.",
        } as SendResult<ResponseRow>)
      const id = input.id || crypto.randomUUID()
      return logged<ResponseRow>(
        "response_submitted",
        { response: id, activityId, kind: input.kind, ...input.payload },
        async () => {
          const current = await supabase!
            .from("sessions")
            .select("state")
            .eq("code", identity!.code)
            .single()
          if (
            current.error ||
            current.data.state?.activityId !== input.activityId
          )
            throw new Error("Activity closed")
          return insertOnce("responses", {
            id,
            session: identity!.code,
            activity_id: input.activityId,
            kind: input.kind,
            student: actor,
            team: input.team || null,
            payload: { ...input.payload, clientId: identity!.clientId },
          })
        },
      )
    },
    uploadArtefact(photo: {
      url: string
      name: string
    }) {
      return action(async () => {
        const file = await (await fetch(photo.url)).blob()
        if (
          !["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
          file.size > 15 * 1024 * 1024
        )
          throw new Error("Invalid image")
        const filename =
          photo.name.replace(/[^a-zA-Z0-9._-]/g, "-") || "artefact.jpg"
        const path = `${identity!.code}/${Date.now()}-${crypto.randomUUID()}-${filename}`
        const result = await supabase!.storage
          .from("artefacts")
          .upload(path, file, { contentType: file.type, upsert: false })
        if (result.error) throw result.error
        const url = supabase!.storage.from("artefacts").getPublicUrl(path)
          .data.publicUrl
        try {
          await log("artefact_uploaded", { path, url, activityId })
        } catch {
          report("Photo uploaded · activity log unavailable")
        }
        return url
      })
    },
  }
}
```

## src/class-session.ts

```typescript
import { useEffect, useState } from "react"
import { supabase } from "./supabase"
import type {
  ClassIdentity,
  ClassRow,
  QuestionRow,
  ReactionRow,
  ResponseRow,
  TutorActivity,
} from "./class-types"

export async function findClass(code: string): Promise<ClassRow> {
  if (!supabase)
    throw new Error("Not connected. You can explore the demo instead.")
  const result = await supabase
    .from("sessions")
    .select("code,unit,week,state")
    .ilike("code", code.toUpperCase())
    .maybeSingle()
  if (result.error)
    throw new Error("Not connected. Check your connection and try again.")
  if (!result.data)
    throw new Error(
      "Class not found. Check the four-character code with your tutor.",
    )
  return result.data as ClassRow
}

export function useClassSession(identity: ClassIdentity | null) {
  const [session, setSession] = useState<ClassRow | null>(null)
  const [activities, setActivities] = useState<TutorActivity[]>([])
  const [questions, setQuestions] = useState<QuestionRow[]>([])
  const [responses, setResponses] = useState<ResponseRow[]>([])
  const [reactions, setReactions] = useState<ReactionRow[]>([])
  const [connected, setConnected] = useState(false)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setSession(null)
    setActivities([])
    setQuestions([])
    setResponses([])
    setReactions([])
    setLoaded(false)
    setConnected(false)
    const client = supabase
    if (!identity || !client) return
    let active = true,
      request = 0,
      subscribed = false
    const code = identity.code
    async function readRows(table: string) {
      const data: unknown[] = []
      for (let from = 0; ; from += 1000) {
        const page = await client!.from(table).select("*").eq("session", code).order("created_at", { ascending: table !== "questions" }).order("id").range(from, from + 999)
        if (page.error) throw page.error
        data.push(...page.data)
        if (page.data.length < 1000) return { data, error: null }
      }
    }
    async function refresh() {
      const version = ++request
      try {
        const results = await Promise.all([
          client!
            .from("sessions")
            .select("code,unit,week,state")
            .eq("code", code)
            .single(),
          readRows("activities"), readRows("questions"), readRows("responses"), readRows("reactions"),
        ])
        if (!active || version !== request) return
        if (results.some((r) => r.error)) throw new Error("Class unavailable")
        setSession(results[0].data as ClassRow)
        setActivities(results[1].data as TutorActivity[])
        setQuestions(results[2].data as QuestionRow[])
        setResponses(results[3].data as ResponseRow[])
        setReactions(results[4].data as ReactionRow[])
        setLoaded(true)
        setConnected(subscribed)
      } catch {
        if (active && version === request) setConnected(false)
      }
    }
    // Subscribe before the snapshot, then refresh on SUBSCRIBED and reconnect:
    // a tutor update cannot fall into the initial fetch/subscription gap.
    const channel = client
      .channel(`student-${code}-${identity.clientId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "sessions",
          filter: `code=eq.${code}`,
        },
        (p) => {
          if (active && p.new && "code" in p.new) { request++; setSession(p.new as ClassRow); scheduleRefresh() }
        },
      )
    let refreshTimer = 0
    function scheduleRefresh() {
      window.clearTimeout(refreshTimer)
      refreshTimer = window.setTimeout(() => { if (active) void refresh() }, 80)
    }
    for (const table of ["activities", "questions", "responses", "reactions"]) {
      channel.on(
        "postgres_changes",
        { event: "*", schema: "public", table, filter: `session=eq.${code}` },
        () => {
          scheduleRefresh()
        },
      )
    }
    channel.subscribe((status) => {
      if (!active) return
      subscribed = status === "SUBSCRIBED"
      if (subscribed) void refresh()
      else setConnected(false)
    })
    void refresh()
    const interval = window.setInterval(refresh, 15000)
    const offline = () => setConnected(false)
    window.addEventListener("online", refresh)
    window.addEventListener("offline", offline)
    return () => {
      active = false
      request++
      window.clearInterval(interval)
      window.clearTimeout(refreshTimer)
      window.removeEventListener("online", refresh)
      window.removeEventListener("offline", offline)
      void client.removeChannel(channel)
    }
  }, [identity?.code, identity?.clientId])
  return {
    session,
    state: session?.state || {},
    activities,
    questions,
    responses,
    reactions,
    connected,
    loaded,
  }
}
```

## src/class-display.ts

```typescript
import type { ClassIdentity, ResponseRow } from "./class-types"
export const DEMO_CLASS_CODE = import.meta.env.VITE_DEMO_CLASS_CODE || "DEMO"
export function displayStudent(name: string | null, identity: ClassIdentity | null, clientId?: unknown) {
  if (!name || name === "Anonymous") return "Anonymous"
  if (clientId === identity?.clientId || name === identity?.name) return name
  const parts = name.trim().split(/\s+/)
  return parts.length > 1 ? `${parts[0]} ${parts.at(-1)![0]}.` : parts[0]
}
export function ownResponse(row: ResponseRow, identity: ClassIdentity | null) {
  return !!identity && row.payload.clientId === identity.clientId
}
```

## src/ClassRoom.tsx

```tsx
import { DEMO_CLASS_CODE } from "./class-display"
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { createClassApi } from "./class-api"
import { useClassSession } from "./class-session"
import type { ClassIdentity } from "./class-types"
import { supabase } from "./supabase"
import "./classroom.css"

const storageKey = "studio-bridge-class"
function restore(): ClassIdentity | null {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || "null")
    return value &&
      /^[A-Z0-9]{4}$/.test(value.code) &&
      typeof value.name === "string" &&
      typeof value.anonymous === "boolean" &&
      typeof value.clientId === "string"
      ? value
      : null
  } catch {
    return null
  }
}
function useRoomValue(identity: ClassIdentity | null, leave: () => void, openJoin: () => void) {
  const live = useClassSession(identity)
  const [sendError, setSendError] = useState("")
  const activityId = live.state.activityId || null
  const api = useMemo(
    () => createClassApi(identity, activityId, setSendError),
    [identity, activityId],
  )
  // Event handlers doing uploads can check the latest tutor state after awaiting.
  const currentActivityId = useRef(activityId)
  currentActivityId.current = activityId
  const activeNames = new Set([...live.questions, ...live.reactions, ...live.responses]
    .filter(row => Date.parse(row.created_at) > Date.now() - 5 * 60 * 1000)
    .map(row => row.student).filter((name): name is string => !!name && name !== identity?.name))
  const activeStudents = activeNames.size + (identity ? 1 : 0)
  return { ...live, identity, api, leave, openJoin, sendError, currentActivityId, activeStudents }
}
type RoomValue = ReturnType<typeof useRoomValue>
const RoomContext = createContext<RoomValue | null>(null)
export function useClassroom() {
  const room = useContext(RoomContext)
  if (!room) throw new Error("Classroom provider missing")
  return room
}
function JoinedClass({
  identity,
  leave,
  openJoin,
  children,
}: {
  identity: ClassIdentity | null
  leave: () => void
  openJoin: () => void
  children: ReactNode
}) {
  const value = useRoomValue(identity, leave, openJoin)
  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>
}
export default function ClassRoom({ children }: { children: ReactNode }) {
  const [savedIdentity] = useState(restore)
  const [identity, setIdentity] = useState<ClassIdentity | null>(() => {
    const current = savedIdentity ? { ...savedIdentity, code: DEMO_CLASS_CODE } : { code: DEMO_CLASS_CODE, name: "Anonymous", anonymous: true, clientId: crypto.randomUUID() }
    try { localStorage.setItem(storageKey, JSON.stringify(current)) } catch { /* In-memory fallback. */ }
    return current
  })
  const [joinOpen, setJoinOpen] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const [name, setName] = useState(savedIdentity?.anonymous ? "" : savedIdentity?.name || "")
  const [anonymous, setAnonymous] = useState(savedIdentity?.anonymous || false)
  useEffect(() => {
    if (joinOpen && !dialog.current?.open) dialog.current?.showModal()
    else if (!joinOpen && dialog.current?.open) dialog.current?.close()
  }, [joinOpen])
  const [error, setError] = useState("")
  const [busy, setBusy] = useState(false)
  const joining = useRef(false)
  function leave() {
    try {
      localStorage.removeItem(storageKey)
    } catch {
      /* Local mode still works. */
    }
    setIdentity(null)
    setJoinOpen(false)
    setError("")
  }
  async function join() {
    if (joining.current) return
    if (!anonymous && !name.trim()) {
      setError("Enter your name or choose Anonymous.")
      return
    }
    joining.current = true
    setBusy(true)
    setError("")
    try {
      const next = {
        code: DEMO_CLASS_CODE,
        name: anonymous ? "Anonymous" : name.trim(),
        anonymous,
        clientId: identity?.clientId || savedIdentity?.clientId || crypto.randomUUID(),
      }
      try {
        localStorage.setItem(storageKey, JSON.stringify(next))
      } catch {
        /* Continue without persistence. */
      }
      setIdentity(next)
      setJoinOpen(false)
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Couldn’t join. Please try again.",
      )
    } finally {
      joining.current = false
      setBusy(false)
    }
  }
  return (
    <>
      <JoinedClass key={identity?.clientId || "demo"} identity={identity} leave={leave} openJoin={() => { setError(""); setJoinOpen(true) }}>
        {children}
      </JoinedClass>
      <dialog ref={dialog} className="class-join-modal" aria-labelledby="class-join-title"
        onCancel={event => { if (busy) event.preventDefault(); else setJoinOpen(false) }}
        onClose={() => setJoinOpen(false)}
        onClick={event => { if (event.target === event.currentTarget && !busy) setJoinOpen(false) }}>
      <section className="class-join-card">
        <button className="class-join-close" type="button" aria-label="Close join dialog" disabled={busy} onClick={() => setJoinOpen(false)}>×</button>
        <img
          className="class-join-logo"
          src="/assets/studio-bridge-logo.svg"
          alt="Studio Bridge"
        />
        <span className="eyebrow">YOUR STUDIO, TOGETHER</span>
        <h1 id="class-join-title">Your classroom name.</h1>
        <p>You’re joining the shared live classroom. Choose how classmates see you.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            void join()
          }}
        >
          <label htmlFor="student-name">Your name</label>
          <input
            id="student-name"
            autoComplete="given-name"
            maxLength={80}
            disabled={anonymous || busy}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="What should we call you?"
          />
          <label className="class-anonymous">
            <input
              type="checkbox"
              checked={anonymous}
              disabled={busy}
              onChange={(e) => setAnonymous(e.target.checked)}
            />{" "}
            Join as Anonymous
          </label>
          {error && (
            <p className="class-join-error" role="alert">
              {error}
            </p>
          )}
          {!supabase && (
            <p className="class-join-error">
              Not connected · live classes are unavailable.
            </p>
          )}
          <button
            className="extra-primary class-join-submit"
            disabled={busy || !supabase}
            type="submit"
          >
            {busy ? "Joining…" : "Save & connect"} <span aria-hidden="true">→</span>
          </button>
        </form>
        <button
          className="class-demo-link"
          disabled={busy}
          onClick={() => setJoinOpen(false)}
          type="button"
        >
          Continue in demo
        </button>
      </section>
      </dialog>
    </>
  )
}
export function ClassBadge() {
  const room = useClassroom()
  return (
    <div className="class-badge-row">
      <span className="class-code-chip">
        {room.identity ? "Live class" : "Demo"}
      </span>
      <span
        className="class-connection"
        role="status"
        title={room.sendError || undefined}
      >
        {room.identity && room.connected && !room.sendError
          ? "● Connected"
          : "○ Not connected"}
      </span>
      {room.identity && <><span className="class-presence"><span className="live-dot" /> {room.activeStudents} in class</span><button type="button" onClick={room.openJoin}>Your name</button></>}
      <button type="button" onClick={room.identity ? room.leave : room.openJoin}>
        {room.identity ? "Leave class" : "Join a class"}
      </button>
      {room.sendError && (
        <small className="class-send-note" role="status">
          {room.sendError}
        </small>
      )}
    </div>
  )
}
```

## src/ClassResults.tsx

```tsx
import { useState } from "react"
import { useClassroom } from "./ClassRoom"
import { displayStudent, ownResponse } from "./class-display"
import type { ConceptQuestion, ResponseRow } from "./class-types"

export function SharedText({ text, english }: { text: string; english?: string }) {
  const [original, setOriginal] = useState(false)
  return <><p>{english || text}</p>{english && english !== text && <div className="question-translation-info"><span>Translated from Chinese</span><button type="button" onClick={() => setOriginal(!original)}>{original ? "Hide original" : "View original"}</button></div>}{original && <p lang="zh-CN" className="shared-original">{text}</p>}</>
}
export function ResponseList({ rows, title }: { rows: ResponseRow[]; title: string }) {
  const room = useClassroom()
  const [all, setAll] = useState(false)
  const others = rows.filter(row => !ownResponse(row, room.identity)).slice().reverse()
  return <section className="class-results" aria-label={title}><h4>{title} <small>{others.length}</small></h4>
    {others.length ? (all ? others : others.slice(0,3)).map(row => <article className="class-response" key={row.id}><strong>{displayStudent(row.student, room.identity, row.payload.clientId)}</strong><SharedText text={String(row.payload.text || "")} english={typeof row.payload.text_en === "string" ? row.payload.text_en : undefined} /></article>) : <p>Classmates’ responses will appear here.</p>}
    {others.length > 3 && <button className="class-results-more" type="button" onClick={() => setAll(!all)}>{all ? "Show fewer" : `View all ${others.length}`}</button>}
  </section>
}
export default function ClassResults({ activityId, q, question, reflection = false, answer }: { activityId: string; q: number; question: ConceptQuestion; reflection?: boolean; answer: unknown }) {
  const room = useClassroom()
  const rows = room.responses.filter(row => row.activity_id === activityId && (reflection ? row.kind === "reflection" : row.payload.q === q))
  if (question.type === "mc") {
    const counts = (question.options || []).map((_, index) => rows.filter(row => row.kind === "choice" && row.payload.answer === index).length)
    const total = counts.reduce((sum,n) => sum+n,0)
    return <section className="class-results" aria-label="Class results"><h4>Class results <small>{total} responses</small></h4>{question.options?.map((option,index) => <div className="class-result-bar" key={index}><div><span>{String.fromCharCode(65+index)} · {option.t}{answer === index ? " · Your answer" : ""}</span><b>{total ? Math.round(counts[index]/total*100) : 0}%</b></div><progress aria-label={option.t} value={counts[index]} max={total || 1} /><small>{counts[index]} responses</small></div>)}</section>
  }
  if (question.type === "scale") {
    const values = rows.filter(row => row.kind === "rating" && typeof row.payload.answer === "number" && row.payload.answer >= 1 && row.payload.answer <=5).map(row => Number(row.payload.answer))
    return <section className="class-results" aria-label="Class average"><h4>Class average <small>{values.length} responses</small></h4><strong className="class-average">{values.length ? (values.reduce((sum,n) => sum+n,0)/values.length).toFixed(1) : "—"}<small> / 5</small></strong><p>Your answer: {String(answer)} / 5</p></section>
  }
  return <><div className="class-own-answer"><small>Your response</small><p>{String(answer)}</p></div><ResponseList rows={rows.filter(row => row.kind === (reflection ? "reflection" : "open"))} title={reflection ? "Classmates’ reflections" : "Classmates’ answers"} /></>
}
export function ArtefactGallery({ activityId }: { activityId: string }) {
  const room = useClassroom()
  const rows = room.responses.filter(row => row.activity_id === activityId && row.kind === "artefact" && !ownResponse(row,room.identity) && typeof row.payload.url === "string" && /^https?:\/\//.test(row.payload.url)).slice().reverse()
  return <section className="class-artefact-gallery" aria-label="Class artefacts"><h3>Made by your classmates</h3>{!rows.length && <p>Classmates’ artefacts will appear here.</p>}<div>{rows.map(row => <figure key={row.id}><img src={String(row.payload.url)} alt={String(row.payload.name || "Classmate’s artefact")} loading="lazy" /><figcaption><strong>{displayStudent(row.student,room.identity,row.payload.clientId)}</strong>{row.team && <small>{row.team}</small>}<p>{String(row.payload.caption || "")}</p></figcaption></figure>)}</div></section>
}
```

## src/TutorActivity.tsx

```tsx
import ClassResults, { ArtefactGallery } from "./ClassResults"
import { useEffect, useReducer, useRef, useState } from "react"
import { useClassroom } from "./ClassRoom"
import {
  activityReducer,
  activityTemplates,
  type ActivityAction,
  type ActivityRun,
} from "./activity-state"
import type {
  ConceptQuestion,
  TutorActivity as TutorActivityRow,
} from "./class-types"
import ExtraActivity from "./ExtraActivity"
import LivePeers from "./LivePeers"

function isQuestion(value: unknown): value is ConceptQuestion {
  if (!value || typeof value !== "object") return false
  const q = value as ConceptQuestion
  return (
    typeof q.text === "string" &&
    ["mc", "scale", "open"].includes(q.type) &&
    (q.type !== "mc" ||
      (Array.isArray(q.options) &&
        q.options.length > 0 &&
        q.options.every((o) => typeof o?.t === "string")))
  )
}
const sampleQuestions: ConceptQuestion[] = [
  {
    type: "mc",
    text: activityTemplates.choice.title,
    options: activityTemplates.choice.options.map((t) => ({ t })),
  },
  {
    type: "scale",
    text: activityTemplates.rating.title,
    lo: "Not confident yet",
    hi: "Ready to try",
  },
]
export default function TutorActivity({
  activity,
  onRecorded,
}: {
  activity: TutorActivityRow
  onRecorded: (entry: {
    id: string
    title: string
    detail: string
    slide: number
    week: number
    kind: "Activity"
  }) => void
}) {
  const room = useClassroom()
  const identity = room.identity!
  const key = `studio-bridge-activity:${identity.code}:${identity.clientId}:${activity.id}`
  const [q, setQ] = useState(0)
  const [showPeers, setShowPeers] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const [answers, setAnswers] = useState<Record<string, number | string>>(
    () => {
      try {
        return JSON.parse(localStorage.getItem(key) || "{}").answers || {}
      } catch {
        return {}
      }
    },
  )
  const [localSent, setLocalSent] = useState<string[]>([])
  const [status, setStatus] = useState("")
  const [busy, setBusy] = useState(false)
  const pending = useRef(false)
  const [retry, setRetry] = useState<{
    id: string
    kind: string
    payload: Record<string, unknown>
    team?: string
  } | null>(null)
  const ids = useRef<Record<string, string>>({})
  const uploadUrl = useRef<{
    source: string
    url: string
  } | null>(null)
  const extraKind = activity.kind === "artefact" ? "artefact" : "discussion"
  const initial: ActivityRun = {
    id: 1,
    page: activity.slide || 1,
    kind: extraKind,
    answer: null,
    submitted: false,
  }
  const [runs, dispatchLocal] = useReducer(activityReducer, [initial])
  const run = runs[0]
  const own = room.responses.filter(
    (r) =>
      r.activity_id === activity.id && r.payload.clientId === identity.clientId,
  )
  const sent = new Set([
    ...localSent,
    ...own.filter(r => ["choice", "rating", "open", "reflection", "discussion", "artefact"].includes(r.kind)).map((r) =>
      r.kind === "reflection" ? "reflection" : String(r.payload.q ?? r.kind),
    ),
  ])
  const rawQuestions = Array.isArray(activity.spec?.questions)
    ? activity.spec.questions
    : []
  // Never filter out a malformed question: doing so would shift payload.q for later answers.
  const questions = rawQuestions.every(isQuestion) ? rawQuestions : []
  const concept = questions.length ? questions : sampleQuestions
  const index = Math.min(q, concept.length - 1)
  const question =
    activity.kind === "reflection"
      ? {
          type: "open" as const,
          text:
            activity.spec?.question || "What changed in your understanding?",
          hint: activity.spec?.hint,
        }
      : concept[index]
  const answerKey =
    activity.kind === "reflection" ? "reflection" : String(index)
  const previous = own.find((r) =>
    activity.kind === "reflection"
      ? r.kind === "reflection"
      : ["choice", "rating", "open"].includes(r.kind) && r.payload.q === index,
  )
  const answer =
    answers[answerKey] ??
    previous?.payload.answer ??
    previous?.payload.text ??
    ""
  const isLive = room.state.activityId === activity.id
  const canSend =
    isLive && (activity.kind !== "concept" || questions.length > 0)
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify({ answers }))
    } catch {
      /* Keep the active draft in memory. */
    }
  }, [key, answers])
  useEffect(() => {
    if (activity.kind === "artefact") {
      const saved = own.find(
        (r) => r.kind === "artefact" && typeof r.payload.url === "string",
      )
      if (saved && !run.submitted) {
        dispatchLocal({
          type: "photo",
          id: 1,
          photo: {
            url: String(saved.payload.url),
            name: String(saved.payload.name || "Artefact"),
            caption: String(saved.payload.caption || ""),
            group: saved.team || "",
          },
        })
        dispatchLocal({ type: "submit", id: 1 })
      }
    }
  }, [room.responses, activity.id])
  async function send(
    input: {
      id: string
      kind: string
      payload: Record<string, unknown>
      team?: string
    },
    mark: string,
  ) {
    if (pending.current) return false
    if (room.currentActivityId.current !== activity.id) {
      setStatus("This activity is no longer live. Your draft stays here.")
      return false
    }
    pending.current = true
    setBusy(true)
    setStatus("Sending…")
    try {
      const result = await room.api.submitResponse({
        ...input,
        activityId: activity.id,
      })
      if (result.error) {
        setRetry(input)
        setStatus(result.error)
        return false
      }
      setRetry(null)
      setLocalSent((current) => [...new Set([...current, mark])])
      setStatus("Sent to your tutor ✓")
      onRecorded({
        id: `live-activity-${input.id}`,
        kind: "Activity",
        title:
          activity.kind === "concept"
            ? question.text
            : activity.kind === "reflection"
              ? question.text
              : activityTemplates[extraKind].title,
        detail: "Your response · Sent to your tutor",
        slide: activity.slide || 1,
        week: room.session?.week || 6,
      })
      return true
    } finally {
      pending.current = false
      setBusy(false)
    }
  }
  async function submitText() {
    if (sent.has(answerKey) || busy || !canSend) return
    const value = answers[answerKey]
    if (value === undefined || (typeof value === "string" && !value.trim()))
      return
    const kind =
      activity.kind === "reflection"
        ? "reflection"
        : question.type === "mc"
          ? "choice"
          : question.type === "scale"
            ? "rating"
            : "open"
    const payload =
      typeof value === "number"
        ? { q: index, answer: value }
        : {
            ...(activity.kind === "concept" ? { q: index } : {}),
            text: value.trim(),
            lang: /[\u3400-\u9fff]/.test(value) ? "zh" : "en",
          }
    ids.current[answerKey] ||= crypto.randomUUID()
    await send({ id: ids.current[answerKey], kind, payload }, answerKey)
  }
  async function dispatchExtra(action: ActivityAction) {
    if (pending.current || busy) return
    if (action.type === "play") {
      dispatchLocal(action)
      await send(
        {
          id: crypto.randomUUID(),
          kind: "discussion",
          payload: { card: action.card },
        },
        "discussion",
      )
    } else if (action.type === "submit" && run.photo) {
      // Preserve the photo while storage is unavailable; retry does not upload twice.
      pending.current = true
      setBusy(true)
      setStatus("Uploading photo…")
      let url =
        uploadUrl.current?.source === run.photo.url ? uploadUrl.current.url : ""
      if (!url) {
        const result = await room.api.uploadArtefact(run.photo)
        if (result.data) {
          url = result.data
          uploadUrl.current = { source: run.photo.url, url }
        } else {
          pending.current = false
          setBusy(false)
          setStatus(result.error || "Photo not sent. Try again.")
          return
        }
      }
      pending.current = false
      setBusy(false)
      const input = {
        id: (ids.current.artefact ||= crypto.randomUUID()),
        kind: "artefact",
        team: run.photo.group,
        payload: { url, name: run.photo.name, caption: run.photo.caption },
      }
      if (await send(input, "artefact")) {
        dispatchLocal({ type: "photo", id: 1, photo: { ...run.photo, url } })
        dispatchLocal(action)
      }
    } else dispatchLocal(action)
  }
  function statusFooter(mark: string) {
    return (
      <div className="tutor-activity-footer">
        <small role="status">
          {status ||
            (isLive
              ? "Shared with your tutor when submitted."
              : "Activity closed · viewing your response")}
        </small>
        {retry && (
          <button
            type="button"
            disabled={busy}
            className="extra-primary"
            onClick={() =>
              void send(retry, mark).then((ok) => {
                if (ok && retry.kind === "artefact")
                  dispatchLocal({ type: "submit", id: 1 })
              })
            }
          >
            Retry sending
          </button>
        )}
      </div>
    )
  }
  if (activity.kind === "qa")
    return (
      <div className="tutor-activity">
        <span className="eyebrow">Q&amp;A</span>
        <h3>What’s on your mind?</h3>
        <p>
          Ask a question in the Questions panel. Your tutor will see it live.
        </p>
        <button
          type="button"
          className="extra-primary"
          onClick={() => {
            const composer = document.querySelector<HTMLTextAreaElement>(
              ".ask-composer textarea",
            )
            if (composer) composer.focus()
            else
              document
                .querySelector<HTMLButtonElement>(".floating-panel-toggle")
                ?.click()
          }}
        >
          Ask a question →
        </button>
      </div>
    )
  if (activity.kind === "discussion" || activity.kind === "artefact") {
    const saved = own.find((r) => r.kind === "artefact")
    const cardCounts = [0, 0, 0, 0, 0]
    for (const response of own)
      if (
        response.activity_id === activity.id &&
        response.kind === "discussion" &&
        Number.isInteger(response.payload.card) &&
        Number(response.payload.card) >= 0 &&
        Number(response.payload.card) < 5
      )
        cardCounts[Number(response.payload.card)]++
    const displayRun =
      saved && !run.photo
        ? {
            ...run,
            photo: {
              url: String(saved.payload.url || ""),
              name: String(saved.payload.name || "Artefact"),
              caption: String(saved.payload.caption || ""),
              group: saved.team || "",
            },
            submitted: true,
          }
        : activity.kind === "discussion"
          ? { ...run, cardCounts }
          : run
    return (
      <div
        className="tutor-activity-shell"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: 0,
        }}
      >
        {activity.kind === "artefact" && <div className="class-gallery-switch"><button type="button" onClick={() => setShowGallery(!showGallery)}>{showGallery ? "← Your artefact" : `Class artefacts · ${room.responses.filter(row => row.activity_id === activity.id && row.kind === "artefact" && row.payload.clientId !== identity.clientId).length}`}</button></div>}
        <div className="class-extra-form" style={{ display: showGallery ? "none" : "flex" }}>
          <ExtraActivity activity={displayRun} dispatch={action => void dispatchExtra(action)} active={!showGallery} pending={busy || !isLive} />
        </div>
        {showGallery && <ArtefactGallery activityId={activity.id} />}
        <div style={{ padding: "0 28px 12px" }}>{statusFooter(extraKind)}</div>
      </div>
    )
  }
  return (
    <div className="tutor-activity">
      <div className="tutor-question-nav">
        <span>
          {activity.kind === "reflection" ? "Reflection" : "Concept check"}
        </span>
        {activity.kind === "concept" &&
          concept.map((_, i) => (
            <button
              key={i}
              type="button"
              disabled={busy}
              aria-label={`Question ${i + 1}`}
              aria-pressed={i === index}
              onClick={() => {
                setQ(i)
                setStatus("")
                setShowPeers(false)
              }}
            >
              {i + 1}
              {sent.has(String(i)) ? " ✓" : ""}
            </button>
          ))}
      </div>
      <h3>{question.text}</h3>
      {question.hint && <p>{question.hint}</p>}
      {!isLive ? (
        <p role="status">Activity closed · viewing your responses.</p>
      ) : (
        !canSend && (
          <p role="status">
            Your tutor is preparing this activity. These sample questions are
            for preview.
          </p>
        )
      )}
      {!sent.has(answerKey) && (question.type === "mc" ? (
        <div
          className="tutor-choices"
          role="group"
          aria-label="Choose one answer"
        >
          {question.options?.map((option, i) => (
            <button
              key={i}
              type="button"
              disabled={busy || !isLive || sent.has(answerKey)}
              aria-pressed={answer === i}
              onClick={() => {
                setAnswers((a) => ({ ...a, [answerKey]: i }))
                ids.current[answerKey] = crypto.randomUUID()
                setRetry(null)
              }}
            >
              <b>{String.fromCharCode(65 + i)}</b>
              {option.t}
            </button>
          ))}
        </div>
      ) : question.type === "scale" ? (
        <>
          <div
            className="tutor-scale"
            role="group"
            aria-label="Choose a score from 1 to 5"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                type="button"
                key={n}
                disabled={busy || !isLive || sent.has(answerKey)}
                aria-pressed={answer === n}
                onClick={() => {
                  setAnswers((a) => ({ ...a, [answerKey]: n }))
                  ids.current[answerKey] = crypto.randomUUID()
                  setRetry(null)
                }}
              >
                {n}
              </button>
            ))}
          </div>
          <div className="tutor-scale-labels">
            <span>{question.lo || "Not yet"}</span>
            <span>{question.hi || "Very sure"}</span>
          </div>
        </>
      ) : (
        <textarea
          aria-label="Your response"
          disabled={busy || !isLive || sent.has(answerKey)}
          value={String(answer)}
          onChange={(e) => {
            setAnswers((a) => ({ ...a, [answerKey]: e.target.value }))
            ids.current[answerKey] = crypto.randomUUID()
            setRetry(null)
          }}
          placeholder={question.hint || "Share your thoughts…"}
        />
      ))}
      {sent.has(answerKey) && <ClassResults activityId={activity.id} q={index} question={question} reflection={activity.kind === "reflection"} answer={answer} />}
      {sent.has(answerKey) ? (
        <div className="tutor-sent">
          <strong>✓ Response sent</strong>
          <p>Your tutor can see your response.</p>
          {activity.kind === "concept" && (
            <button type="button" onClick={() => setShowPeers(!showPeers)}>
              {showPeers ? "Hide peer responses" : "View peer responses"}
            </button>
          )}
        </div>
      ) : (
        <div className="tutor-activity-footer">
          <small role="status">
            {status || "Your response is shared with your tutor."}
          </small>
          <button
            type="button"
            className="extra-primary"
            disabled={busy || answer === "" || !canSend}
            onClick={() => void submitText()}
          >
            {busy ? "Sending…" : "Submit response →"}
          </button>
        </div>
      )}
      <LivePeers key={index} activityId={activity.id} q={index} expanded={showPeers} />
    </div>
  )
}
```

## src/LivePeers.tsx

```tsx
import { SharedText } from "./ClassResults"
import { displayStudent } from "./class-display"
import { useReducer, useRef, useState } from "react"
import { useClassroom } from "./ClassRoom"
import {
  initialPeerDiscussions,
  peerDiscussionReducer,
} from "./peer-discussion"

export default function LivePeers({
  activityId,
  q,
  expanded = false,
}: {
  activityId: string
  q: number
  expanded?: boolean
}) {
  const room = useClassroom()
  const [discussion, dispatch] = useReducer(peerDiscussionReducer, {
    1: { ...initialPeerDiscussions[2], messages: [] },
  })
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const pending = useRef(false)
  const retryId = useRef<string | null>(null)
  const rows = room.responses.filter(
    (row) => row.activity_id === activityId && row.kind === "peer_reply" && (row.payload.q === undefined || row.payload.q === q),
  )
  async function post() {
    const text = discussion[1].draft.trim()
    if (!text || pending.current) return
    pending.current = true
    setBusy(true)
    const id = retryId.current || crypto.randomUUID()
    retryId.current = id
    try {
      const result = await room.api.submitResponse({
        id,
        activityId,
        kind: "peer_reply",
        payload: { q, parentId: discussion[1].replyTo, text },
      })
      if (result.error) {
        setError(result.error)
        return
      }
      dispatch({ type: "post", activityId: 1, id })
      setError("")
      retryId.current = null
    } finally {
      pending.current = false
      setBusy(false)
    }
  }
  return (
    <section className="live-peers" aria-label="Peer discussion">
      <h4>Replies between students</h4>
      {rows.map((row) => (
        <article key={row.id}>
          <strong>{displayStudent(row.student, room.identity, row.payload.clientId)}</strong>
          <SharedText text={String(row.payload.text || "")} english={typeof row.payload.text_en === "string" ? row.payload.text_en : undefined} />
          <button
            type="button"
            onClick={() =>
              dispatch({ type: "reply", activityId: 1, peerId: row.id })
            }
          >
            Reply
          </button>
        </article>
      ))}
      {!rows.length && <p>Be the first to share your thinking.</p>}
      {discussion[1].replyTo && (
        <small>
          Replying to a classmate{" "}
          <button
            type="button"
            onClick={() =>
              dispatch({ type: "reply", activityId: 1, peerId: null })
            }
          >
            Cancel
          </button>
        </small>
      )}
      <details open={expanded || !!discussion[1].replyTo || undefined}><summary>Write a reply</summary>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          void post()
        }}
      >
        <textarea
          aria-label="Reply to classmates"
          value={discussion[1].draft}
          disabled={busy}
          placeholder="Share your thinking with classmates…"
          onChange={(e) => {
            dispatch({ type: "draft", activityId: 1, text: e.target.value })
            retryId.current = null
          }}
        />
        <button
          className="extra-primary"
          type="submit"
          disabled={busy || !discussion[1].draft.trim()}
        >
          {busy ? "Sending…" : "Send reply"}
        </button>
      </form>
      </details>
      {error && <small role="status">{error}</small>}
    </section>
  )
}
```

## src/classroom.css

```css
.class-join-page { min-height:100dvh; display:grid; place-items:center; padding:32px; background:radial-gradient(ellipse at 20% 15%,#e0e8db,transparent 55%),#f5f2e9; color:#293328; }
.class-join-card { width:min(100%,440px); padding:36px 40px 28px; border:1px solid #ffffffd9; border-radius:26px; background:#fffdf4d9; box-shadow:0 20px 70px #34443112,inset 0 1px 0 white; backdrop-filter:blur(24px); }
.class-join-logo { width:44px; height:44px; margin-bottom:22px; }
.class-join-card .eyebrow { display:block; font-size:10px; }
.class-join-card h1 { font:500 36px/1.2 ui-serif,Georgia,serif; letter-spacing:-1px; margin:10px 0; }
.class-join-card > p { font-size:14px; color:#778071; line-height:1.6; margin:0 0 24px; }
.class-join-card form { display:flex; flex-direction:column; gap:9px; }
.class-join-card label { font-size:13px; font-weight:600; }
.class-join-card input:not([type=checkbox]) { padding:12px 14px; border:1px solid #dce0d5; border-radius:12px; background:#ffffffb0; width:100%; font:inherit; }
.class-join-card input:disabled { opacity:.5; }
.class-join-card input:focus-visible,.tutor-activity textarea:focus-visible { outline:2px solid #638163; outline-offset:2px; }
.class-join-card .class-anonymous { display:flex; gap:8px; align-items:center; font-weight:400; margin:0 0 14px; color:#687361; }
.class-code-input { letter-spacing:7px; font-weight:600!important; font-size:22px!important; }
.class-join-card small { font-size:11px; color:#7a8274; }
.class-join-submit { margin-top:12px; padding:13px!important; border-radius:12px; }
.class-join-error { font-size:12px; color:#934932; line-height:1.5; }
.class-demo-link { display:block; margin:20px auto 0; font-size:12px; color:#65785e; }
.class-badge-row { display:flex; align-items:center; flex-wrap:wrap; gap:8px; margin-top:8px; font-size:10px; color:#72806c; }
.class-code-chip { font-weight:600; letter-spacing:.4px; padding:3px 7px; border:1px solid #d8dfd1; border-radius:7px; }
.class-badge-row button { text-decoration:underline; text-underline-offset:3px; }
.class-send-note { flex-basis:100%; font-size:10px; }
.tutor-activity { flex:1; min-height:0; display:flex; flex-direction:column; padding:20px 28px 16px; gap:12px; overflow:auto; }
.tutor-activity h3 { font:500 clamp(20px,3cqw,30px)/1.2 ui-serif,Georgia,serif; letter-spacing:-.6px; margin:0; }
.tutor-activity p { font-size:13px; color:#74806e; margin:0; }
.tutor-activity .tutor-question-nav { display:flex; gap:7px; align-items:center; font-size:11px; }
.tutor-question-nav button { border-radius:7px; padding:4px 8px; border:1px solid #d9dfd3; }
.tutor-question-nav button[aria-pressed=true] { background:#355035; color:#fff; }
.tutor-choices { display:grid; gap:8px; min-height:0; }
.tutor-choices button { display:flex; align-items:center; gap:10px; text-align:left; padding:10px 14px; border:1px solid #dce0d5; border-radius:12px; font-size:14px; }
.tutor-choices button[aria-pressed=true] { background:#e3ebde; border-color:#456044; box-shadow:inset 0 0 0 1px #456044; }
.tutor-choices b { width:26px; height:26px; display:grid; place-items:center; border-radius:7px; background:#e8ecdf; flex-shrink:0; }
.tutor-scale { display:grid; grid-template-columns:repeat(5,1fr); gap:9px; }
.tutor-scale button { border:1px solid #dce0d5; border-radius:12px; padding:16px; font-size:26px; }
.tutor-scale button[aria-pressed=true] { background:#e3ebde; border-color:#456044; }
.tutor-scale-labels { display:flex; justify-content:space-between; font-size:11px; color:#778071; }
.tutor-activity textarea { width:100%; min-height:80px; flex:1; max-height:160px; resize:vertical; background:#ffffffb0; border:1px solid #dce0d5; border-radius:12px; padding:12px; font:inherit; font-size:14px; }
.tutor-activity-footer { margin-top:auto; display:flex; align-items:center; justify-content:space-between; gap:12px; }
.tutor-activity-footer button { padding:10px 18px; border-radius:10px; }
.tutor-activity-footer small { font-size:11px; color:#72806c; }
.tutor-activity button:disabled { opacity:.5; cursor:default; }
.tutor-sent { display:flex; align-items:center; gap:10px; background:#e4ecdf; border-radius:12px; padding:14px; }
.tutor-sent strong { font-size:14px; }
.tutor-activity-shell > .extra-activity { margin-bottom:0; }
.question-tutor-answer { background:#f0f5e9; border-radius:10px; margin:8px 0; padding:10px 12px; font-size:12px; }
@container (max-width:660px) { .tutor-activity { padding:12px 18px; gap:8px; } .tutor-activity h3 { font-size:20px; } .tutor-choices button { padding:7px 10px; font-size:12px; } }
@media(max-width:600px) { .class-join-page { padding:16px; } .class-join-card { padding:24px; } }
.live-peers { border-top:1px solid #dce0d5; padding-top:12px; font-size:12px; }
.live-peers h4 { font-size:14px; margin:0 0 10px; }
.live-peers article { padding:10px 0; border-bottom:1px solid #e4e8de; }
.live-peers article button,.live-peers > small button { color:#456044; text-decoration:underline; font-size:11px; }
.live-peers form { display:flex; gap:8px; align-items:end; margin-top:12px; }
.live-peers form textarea { min-height:60px; }
.live-peers form button { border-radius:9px; padding:10px; white-space:nowrap; }
.class-join-card .extra-primary,.tutor-activity .extra-primary,.tutor-activity-shell .extra-primary { color:white; background:#344c34; border:1px solid transparent; font-weight:550; cursor:pointer; }
.class-join-card .extra-primary:hover,.tutor-activity .extra-primary:hover { background:#405b3f; }
.class-join-card .extra-primary:disabled { opacity:.5; cursor:default; }
.tutor-activity .extra-primary:focus-visible,.class-join-card .extra-primary:focus-visible { outline:2px solid #81977a; outline-offset:3px; }

.class-join-modal { border:0; padding:20px; background:transparent; color:#293328; width:min(100%,480px); max-width:100vw; max-height:100dvh; overflow:auto; margin:auto; }
.class-join-modal::backdrop { background:rgba(38,48,38,.28); backdrop-filter:blur(8px); }
.class-join-modal .class-join-card { position:relative; width:100%; }
.class-join-close { position:absolute; top:16px; right:18px; display:grid; place-items:center; width:30px; height:30px; border-radius:50%; background:#e6ebdf; color:#65785e; font-size:23px; line-height:1; }
.class-join-close:focus-visible { outline:2px solid #638163; outline-offset:2px; }
@media (prefers-reduced-transparency:reduce) { .class-join-modal::backdrop { backdrop-filter:none; background:#26302670; } }
.class-presence { display:inline-flex; gap:5px; align-items:center; }
.class-presence .live-dot { width:5px; height:5px; background:#74896a; box-shadow:0 0 0 3px #74896a15; }
.class-results { border-top:1px solid var(--line); padding-top:10px; font-size:12px; }
.class-results h4 { margin:0 0 10px; font-size:13px; display:flex; justify-content:space-between; gap:12px; }
.class-results h4 small,.class-result-bar small,.class-own-answer small { color:var(--muted); font-size:10px; font-weight:400; }
.class-result-bar { margin-bottom:10px; }
.class-result-bar > div { display:flex; justify-content:space-between; gap:12px; margin-bottom:4px; font-size:12px; }
.class-result-bar progress { display:block; width:100%; height:7px; accent-color:#6d8665; }
.class-average { font-size:32px; color:var(--olive); }.class-average small { font-size:14px; font-weight:400; }
.class-response { padding:9px 0; border-top:1px solid #344b350c; }
.class-response strong { font-size:11px; }.class-response p { margin-top:4px; font-size:12px; }
.class-results-more,.class-gallery-switch button { font-size:11px; color:var(--olive); }
.class-gallery-switch { padding:8px 24px 0; display:flex; justify-content:flex-end; flex:none; }
.class-extra-form { flex:1; min-height:0; flex-direction:column; }
.class-extra-form > .extra-activity { margin-bottom:0; }
.class-artefact-gallery { flex:1; min-height:0; overflow:auto; padding:12px 24px; }
.class-artefact-gallery h3 { font:500 22px ui-serif,Georgia,serif; margin:0 0 12px; }
.class-artefact-gallery > div { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
.class-artefact-gallery figure { margin:0; border:1px solid var(--line); border-radius:10px; overflow:hidden; }
.class-artefact-gallery img { width:100%; height:140px; object-fit:contain; background:#f0f3eb; }
.class-artefact-gallery figcaption { padding:8px; font-size:11px; }.class-artefact-gallery small { margin-left:8px; color:var(--muted); }
.tutor-activity { padding-bottom:18px; }.tutor-activity > * { flex-shrink:0; }
.tutor-activity-footer { position:static; flex:none; padding-top:8px; flex-wrap:wrap; }
.tutor-activity-footer small { flex:1 1 160px; }.tutor-activity-footer button { flex:none; }
.classroom-inline-replies { margin-top:8px; border-top:1px solid var(--line); padding-top:8px; }
@keyframes classroom-enter { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
@keyframes classroom-pop { 50% { transform:scale(1.2); } }
.question-card { animation:classroom-enter .22s ease-out; }.reaction-live-count { animation:classroom-pop .25s ease-out; }
@media(prefers-reduced-motion:reduce) { .question-card,.reaction-live-count { animation:none; } }
@container(max-width:660px) { .class-extra-form .extra-activity--artefact { padding-top:10px; } .class-extra-form .extra-activity--artefact .extra-activity-title { margin-bottom:8px; } .class-extra-form .extra-activity--artefact .extra-activity-title h3 { margin-top:5px; font-size:20px; } .class-extra-form .artefact-empty { gap:5px; padding:8px; } .class-extra-form .artefact-details { gap:6px; } }
@media(max-width:1150px) {
  .slide-surface:has(.tutor-activity),.slide-surface:has(.tutor-activity-shell) { height:100%; aspect-ratio:auto; max-height:100%; }
  .slide-surface > .embedded-activity:has(.tutor-activity),.slide-surface > .embedded-activity:has(.tutor-activity-shell) { aspect-ratio:auto; }
}
.class-activity-navigation .presentation-arrows { position:static; transform:none; }
.embedded-activity-header:has(.class-activity-navigation) { padding-block:6px; }
@media(max-width:1150px) {
  .slide-surface:has(> .embedded-activity) { height:100%; aspect-ratio:auto; max-height:100%; }
  .slide-surface > .embedded-activity { aspect-ratio:auto; }
}
/* One glass navigation treatment for slides, practice and tutor activities. */
.presentation-arrows.glass {
  bottom:12px; padding:5px; gap:6px; border-radius:14px;
  background:rgba(248,251,244,.56);
  border:1px solid rgba(255,255,255,.82);
  box-shadow:0 5px 18px rgba(38,48,38,.14),inset 0 1px 0 rgba(255,255,255,.95),inset 0 -1px 0 rgba(52,75,53,.06);
  backdrop-filter:blur(28px) saturate(1.4);
  -webkit-backdrop-filter:blur(28px) saturate(1.4);
}
.presentation-arrows .presentation-arrow { width:36px; height:36px; border-radius:9px; }
.presentation-arrows .presentation-arrow:not(.previous):not(:disabled) { background:rgba(52,75,53,.13); color:#2e4930; box-shadow:inset 0 1px 0 rgba(255,255,255,.7); }
.presentation-arrows .presentation-arrow:hover:not(:disabled) { background:rgba(52,75,53,.2); }
.presentation-arrows .presentation-arrow:disabled { opacity:1; color:#a2aa9c; background:rgba(52,75,53,.035); }
.presentation-arrows .presentation-page { min-width:52px; color:#293b2a; font-size:11px; }
.presentation-arrow:focus-visible { outline:2px solid #638163; outline-offset:2px; }

/* Keep activity controls accessible in short windows. */
.tutor-activity > * { flex-shrink: 0; }
.tutor-activity > textarea { flex: 1 0 80px; }
.tutor-choices { min-height: auto; }
.embedded-activity-body.extra-activity--artefact { overflow: auto; }
.artefact-layout { grid-template-rows: minmax(min-content, 1fr); }
.artefact-details { grid-template-rows: auto minmax(72px, 1fr) auto auto; }
.artefact-details label:nth-child(2) { grid-template-rows: auto minmax(72px, 1fr); }
```

## tests/create-test-class.mjs

```javascript
import { mkdirSync, writeFileSync } from "node:fs"
import { createClient } from "@supabase/supabase-js"
import { loadEnv } from "vite"
const env = loadEnv("development", process.cwd(), "VITE_")
const db = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY, {
  auth: { persistSession: false },
})
let code
for (let i = 0; i < 8; i++) {
  code = "T" + Math.random().toString(36).slice(2, 5).toUpperCase()
  const { data } = await db
    .from("sessions")
    .select("code")
    .eq("code", code)
    .maybeSingle()
  if (!data) break
}
const result = await db
  .from("sessions")
  .insert({
    code,
    unit: "Studio Bridge integration test",
    week: 6,
    state: { slide: 3, activityId: null, activityKind: null },
  })
if (result.error) throw result.error
mkdirSync("work", { recursive: true })
writeFileSync("work/test-class.json", JSON.stringify({ code }))
console.log("Isolated test class created:", code)
const path = `${code}/integration-test.png`
const png = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aORcAAAAASUVORK5CYII=",
  "base64",
)
const upload = await db.storage
  .from("artefacts")
  .upload(path, png, { contentType: "image/png" })
console.log("Storage upload:", upload.error ? upload.error.message : "OK")
if (!upload.error) {
  const { data } = db.storage.from("artefacts").getPublicUrl(path)
  console.log("Public image:", (await fetch(data.publicUrl)).status)
}
```

## tests/shared-classroom.mjs

```javascript
import assert from 'node:assert/strict'
import {readFileSync,mkdirSync} from 'node:fs'
import {createClient} from '@supabase/supabase-js'
import {loadEnv} from 'vite'
import {chromium} from '@playwright/test'
const {code}=JSON.parse(readFileSync('work/test-class.json'))
const env=loadEnv('development',process.cwd(),'VITE_');const db=createClient(env.VITE_SUPABASE_URL,env.VITE_SUPABASE_ANON_KEY,{auth:{persistSession:false}})
// Fixtures are restricted to a separately created test class. The Student UI never seeds rows.
assert.notEqual(code,'DEMO')
async function insert(table,value){const r=await db.from(table).insert(value).select();if(r.error)throw r.error;return r.data}
async function wait(test,label){for(let i=0;i<80;i++){const value=await test();if(value)return value;await new Promise(r=>setTimeout(r,200))}throw Error('Timed out: '+label)}
async function response(kind,payload,activity_id,student='Maya Chen'){return insert('responses',{session:code,activity_id,student,kind,payload:{...payload,sim:true}})}
async function rows(){const r=await db.from('responses').select('*').eq('session',code);if(r.error)throw r.error;return r.data}
const [question]=await insert('questions',{session:code,student:'Maya Chen',text:'我们应该先做亲和图吗？',text_en:'Should we start with an affinity map?',lang:'zh',slide:3})
await insert('reactions',[{session:code,kind:'got',student:'Maya Chen'},{session:code,kind:'got',student:'Alex Morgan'}])
const concept=code+'-shared-concept'
const spec={questions:[{type:'mc',text:'Which evidence is useful?',options:[{t:'Research patterns'},{t:'Assumptions'},{t:'An ideal customer'},{t:'A fictional character'}]},{type:'scale',text:'How confident are you?'},{type:'open',text:'What did you notice?'}]}
await insert('activities',{id:concept,session:code,kind:'concept',slide:3,spec})
for(const a of [0,0,1])await response('choice',{q:0,answer:a},concept)
for(const a of [2,4])await response('rating',{q:1,answer:a},concept)
await response('open',{q:2,text:'我们用访谈证据。',text_en:'We used interview evidence.',lang:'zh'},concept)
await response('peer_reply',{text:'Can you add a quote?'},concept,'Alex Morgan')
const browser=await chromium.launch({...(process.env.STUDIO_BRIDGE_CHROME?{executablePath:process.env.STUDIO_BRIDGE_CHROME}:{}),headless:true})
mkdirSync('work/qa',{recursive:true})
try{
 const page=await browser.newPage({viewport:{width:1440,height:900}});const errors=[];page.on('pageerror',e=>errors.push(e.message))
 await page.goto(process.env.STUDENT_TEST_URL||'http://127.0.0.1:8443/')
 await page.getByText('Live class',{exact:true}).first().waitFor();assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('studio-bridge-class')).code),code,'Run dev server with the isolated test class code');assert.equal(await page.getByRole('dialog').count(),0)
 await page.getByText('Should we start with an affinity map?',{exact:true}).waitFor()
 await page.getByText('Maya C.',{exact:true}).first().waitFor();assert.equal(await page.getByText('Maya Chen',{exact:true}).count(),0)
 const questionCard=page.locator('.question-card').filter({hasText:'Should we start with an affinity map?'})
 await questionCard.getByRole('button',{name:'Reply',exact:true}).click();await questionCard.locator('textarea').fill('Yes, start with the evidence.')
 await questionCard.getByRole('button',{name:'Send reply',exact:true}).click()
 await wait(async()=>(await rows()).some(r=>r.kind==='qa_reply'&&r.payload.questionId===question.id),'Q&A reply without activity')
 const rx=await db.from('questions').select('upvotes').eq('id',question.id).single();const before=rx.data.upvotes
 await Promise.all([db.rpc('upvote_question',{qid:question.id}),db.rpc('upvote_question',{qid:question.id})])
 await wait(async()=>{const r=await db.from('questions').select('upvotes').eq('id',question.id).single();return r.data.upvotes===before+2},'atomic votes')
 await questionCard.locator('.question-actions > button').first().click()
 await wait(async()=>{const r=await db.from('questions').select('upvotes').eq('id',question.id).single();return r.data.upvotes===before+3},'UI RPC vote')
 await response('qa_reply',{questionId:question.id,text:'We started with observations.'},'none','Alex Morgan')
 await page.getByText('We started with observations.',{exact:true}).waitFor()
 await insert('questions',{session:code,student:'Yuki Tanaka',text:'A new live question',slide:3})
 await page.getByText('A new live question',{exact:true}).waitFor();await page.getByText('Yuki T.',{exact:true}).waitFor()
 await page.getByRole('button',{name:/Got it, 2 reactions/}).waitFor();await insert('reactions',{session:code,kind:'got',student:'Yuki Tanaka'})
 await page.getByRole('button',{name:/Got it, 3 reactions/}).waitFor()
 console.log('PASS automatic join / abbreviated names / translation / Q&A without active activity / atomic votes / incoming questions and reactions')
 async function activate(id,kind,spec={}){if(id!==concept)await insert('activities',{id,session:code,kind,slide:3,spec});const r=await db.from('sessions').update({state:{slide:3,activityId:id,activityKind:kind}}).eq('code',code);if(r.error)throw r.error;await page.getByLabel('Live class activity').waitFor()}
 await activate(concept,'concept')
 for(const [width,height]of [[1440,900],[1024,768]]) { await page.setViewportSize({width,height}); const submit=page.getByRole('button',{name:'Submit response →',exact:true});await submit.waitFor();const b=await submit.boundingBox();const card=await page.locator('.slide-surface').boundingBox();assert.ok(b.y+b.height<=card.y+card.height,'Concept submit outside card');await page.screenshot({path:`work/qa/shared-concept-${width}.png`}) }
 await page.setViewportSize({width:1440,height:900})
 await page.getByRole('button',{name:'A Research patterns',exact:true}).click();await page.getByRole('button',{name:'Submit response →',exact:true}).click()
 await page.getByLabel('Class results').getByText('75%',{exact:true}).waitFor()
 await response('choice',{q:0,answer:1},concept,'Yuki Tanaka')
 await page.getByLabel('Class results').getByText('60%',{exact:true}).waitFor()
 await page.getByText('Can you add a quote?',{exact:true}).waitFor()
 await page.getByRole('button',{name:'Question 2',exact:true}).click();await page.locator('.tutor-scale').getByRole('button',{name:'5',exact:true}).click();await page.getByRole('button',{name:'Submit response →',exact:true}).click()
 await page.getByLabel('Class average').getByText('3.7',{exact:false}).waitFor()
 await page.getByRole('button',{name:'Question 3',exact:true}).click();await page.getByRole('textbox',{name:'Your response',exact:true}).fill('We found a repeating need.');await page.getByRole('button',{name:'Submit response →',exact:true}).click()
 await page.getByText('We used interview evidence.',{exact:true}).waitFor();await page.getByLabel('Classmates’ answers').getByRole('button',{name:'View original',exact:true}).click();await page.getByText('我们用访谈证据。',{exact:true}).waitFor()
 console.log('PASS live MC bars / scale average / other open answers / original text / activity replies without q')
 const reflect=code+'-shared-reflection';await activate(reflect,'reflection',{question:'What changed?',hint:'Use evidence.'});await response('reflection',{text:'I now check patterns.'},reflect)
 await page.getByRole('textbox',{name:'Your response',exact:true}).fill('I understand it differently.');await page.getByRole('button',{name:'Submit response →',exact:true}).click();await page.getByText('I now check patterns.',{exact:true}).waitFor()
 const discuss=code+'-shared-discussion';await activate(discuss,'discussion');await response('discussion',{card:0},discuss);await page.getByRole('button',{name:/Play Agree card.*0 played/}).waitFor();await page.getByRole('button',{name:/Play Agree card/}).click();await page.getByRole('button',{name:/Play Agree card.*1 played/}).waitFor()
 console.log('PASS classmates reflections / discussion only counts own cards')
 const art=code+'-shared-artefact';await activate(art,'artefact')
 const url=db.storage.from('artefacts').getPublicUrl(code+'/integration-test.png').data.publicUrl
 await response('artefact',{url,name:'Persona',caption:'Our evidence map'},art)
 for(const [width,height]of [[1440,900],[1024,768]]){
  await page.setViewportSize({width,height});await page.getByRole('button',{name:/Submit artefact/}).waitFor()
  const button=await page.getByRole('button',{name:/Submit artefact/}).boundingBox();const slide=await page.locator('.slide-surface').boundingBox();assert.ok(button.y+button.height<=slide.y+slide.height,JSON.stringify({button,slide}))
  const field=await page.getByLabel('The thinking behind it').boundingBox();assert.ok(field.y+field.height<=button.y+1,'Thinking field overlaps submit')
  await page.screenshot({path:`work/qa/shared-artefact-${width}.png`})
 }
 await page.getByRole('button',{name:/Class artefacts/}).click();await page.getByText('Our evidence map',{exact:true}).waitFor();await response('artefact',{url,name:'Sketch',caption:'New sketch arrived'},art,'Yuki Tanaka');await page.getByText('New sketch arrived',{exact:true}).waitFor()
 await page.screenshot({path:'work/qa/shared-gallery.png'})
 await page.getByRole('button',{name:'Leave class',exact:true}).click();await page.getByRole('button',{name:'Join a class',exact:true}).waitFor();await page.locator('.slide-image').waitFor()
 assert.equal(errors.length,0,errors.join('\n'));console.log('PASS artefact gallery live updates / normal-flow submit 1024 & 1440 / offline sample mode / no browser errors')
}finally{await browser.close()}
```

## tests/lesson-navigation.mjs

```javascript
import assert from 'node:assert/strict'
import{readFileSync,mkdirSync}from'node:fs'
import{createClient}from'@supabase/supabase-js'
import{loadEnv}from'vite'
import{chromium}from'@playwright/test'
const {code}=JSON.parse(readFileSync('work/test-class.json'));assert.notEqual(code,'DEMO')
const e=loadEnv('development',process.cwd(),'VITE_');const db=createClient(e.VITE_SUPABASE_URL,e.VITE_SUPABASE_ANON_KEY,{auth:{persistSession:false}})
const aid=code+'-navigation'
const a=await db.from('activities').insert({id:aid,session:code,kind:'concept',slide:18,spec:{questions:[{type:'mc',text:'Teacher controlled activity',options:[{t:'Evidence'},{t:'Assumptions'}]}]}});if(a.error)throw a.error
async function command(slide,activityId=null){const r=await db.from('sessions').update({state:{slide,activityId,activityKind:activityId?'concept':null,updatedAt:new Date().toISOString()}}).eq('code',code);if(r.error)throw r.error}
await command(18,aid)
const browser=await chromium.launch({...(process.env.STUDIO_BRIDGE_CHROME?{executablePath:process.env.STUDIO_BRIDGE_CHROME}:{}),headless:true});mkdirSync('work/qa',{recursive:true})
try{
 const p=await browser.newPage({viewport:{width:1440,height:900}});const errors=[];p.on('pageerror',err=>errors.push(err.message))
 await p.goto(process.env.STUDENT_TEST_URL||'http://127.0.0.1:8443/');await p.getByText('● Connected',{exact:true}).first().waitFor()
 assert.equal(await p.evaluate(()=>JSON.parse(localStorage.getItem('studio-bridge-class')).code),code)
 const nav=p.getByRole('navigation',{name:'Slides and activities'});const next=nav.getByRole('button',{name:'Next page',exact:true})
 await p.locator('.slide-image[src$="page-01.jpg"]').waitFor();await p.getByText('Browse freely',{exact:true}).waitFor()
 const activityPages={3:'What makes a useful persona?',5:'How confident are you with reframing?',7:'Discuss with your peers.',9:'Show what your group made.'}
 let source=0
 for(let page=1;page<=23;page++){
  await nav.locator('.presentation-page').filter({hasText:new RegExp('^'+page+'\\s*/\\s*23$')}).waitFor()
  if(activityPages[page]) await p.getByRole('heading',{name:activityPages[page],exact:true}).waitFor()
  else{source++;await p.locator(`.slide-image[src$="page-${String(source).padStart(2,'0')}.jpg"]`).waitFor()}
  if(page<23)await next.click()
 }
 assert.equal(source,19);assert.ok(await next.isDisabled());console.log('PASS 19 original slides / fixed practice at 3,5,7,9 / no tutor-page limit')
 // Keyboard navigation can leave the final page and preserves the first/last boundaries.
 await p.keyboard.press('ArrowLeft');await nav.locator('.presentation-page').filter({hasText:/^22\s*\/\s*23$/}).waitFor()
 await command(10)
 await p.locator('.slide-image[src$="page-10.jpg"]').waitFor();await p.getByText('Following tutor',{exact:true}).waitFor()
 await next.click();await p.locator('.slide-image[src$="page-11.jpg"]').waitFor()
 await db.from('reactions').insert({session:code,kind:'got',student:'Navigation tester'})
 await p.getByRole('button',{name:/Got it, 1 reactions/}).waitFor()
 await p.locator('.slide-image[src$="page-11.jpg"]').waitFor()
 // A repeated snapshot/heartbeat must not reset manual browsing.
 await db.from('sessions').update({unit:'Navigation test class'}).eq('code',code)
 await p.getByText('Navigation test class · Week 6',{exact:true}).waitFor()
 await p.locator('.slide-image[src$="page-11.jpg"]').waitFor()
 await p.getByRole('button',{name:'Back to live',exact:true}).click();await p.locator('.slide-image[src$="page-10.jpg"]').waitFor()
 await command(12,aid)
 await p.getByRole('heading',{name:'Teacher controlled activity',exact:true}).waitFor()
 await next.click();await p.locator('.slide-image[src$="page-13.jpg"]').waitFor()
 await p.getByRole('button',{name:'Back to live',exact:true}).click();await p.getByRole('heading',{name:'Teacher controlled activity',exact:true}).waitFor()
 await command(2)
 await p.locator('.slide-image[src$="page-02.jpg"]').waitFor();await next.click();await p.getByRole('heading',{name:'What makes a useful persona?',exact:true}).waitFor()
 const before=await db.from('responses').select('id',{count:'exact',head:true}).eq('session',code)
 await p.getByLabel('Patterns grounded in research with real users',{exact:false}).check()
 await p.getByRole('button',{name:'Submit response',exact:false}).click();await p.getByText('You’re all set.',{exact:true}).waitFor()
 const after=await db.from('responses').select('id',{count:'exact',head:true}).eq('session',code);assert.equal(after.count,before.count)
 await p.getByRole('button',{name:'My Learning',exact:true}).click()
 const entry=p.locator('.learning-entry').filter({has:p.getByRole('heading',{name:'What makes a useful persona?',exact:true})})
 await entry.getByRole('button',{name:/View response/}).click();await p.getByText('You’re all set.',{exact:true}).waitFor()
 const form=p.locator('.ask-composer textarea');await form.focus();await p.keyboard.press('ArrowRight');await p.getByText('You’re all set.',{exact:true}).waitFor()
 await p.screenshot({path:'work/qa/free-browsing.png'})
 console.log('PASS teacher commands take over / manual browsing survives snapshots / return to live / live activity navigation / practice remains local / My Learning / typing does not flip pages')
 assert.equal(errors.length,0,errors.join('\n'))
}finally{await browser.close()}
```
