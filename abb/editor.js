// Load font data from JSON
async function loadFonts() {
    const fontData = {
        "ABeeZee": {
          "400": "https://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN2tWkkJUEGpA.woff2",
          "400italic": "https://fonts.gstatic.com/s/abeezee/v22/esDT31xSG-6AGleN2tCUkp8DOJKuGA.woff2"
        },
        "ABeeZee": {
    "400": "https://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN2tWkkJUEGpA.woff2",
    "400italic": "https://fonts.gstatic.com/s/abeezee/v22/esDT31xSG-6AGleN2tCUkp8DOJKuGA.woff2"
  },
  "Abel": {
    "400": "https://fonts.gstatic.com/s/abel/v18/MwQ5bhbm2POE2V9BPbh5uGM.woff2"
  },
  "Abhaya Libre": {
    "400": "https://fonts.gstatic.com/s/abhayalibre/v14/e3tmeuGtX-Co5MNzeAOqinEQfEnXgPRE4g.woff2",
    "500": "https://fonts.gstatic.com/s/abhayalibre/v14/e3t5euGtX-Co5MNzeAOqinEYj2rCrdZJyIU9BQ.woff2",
    "600": "https://fonts.gstatic.com/s/abhayalibre/v14/e3t5euGtX-Co5MNzeAOqinEYo23CrdZJyIU9BQ.woff2",
    "700": "https://fonts.gstatic.com/s/abhayalibre/v14/e3t5euGtX-Co5MNzeAOqinEYx2zCrdZJyIU9BQ.woff2",
    "800": "https://fonts.gstatic.com/s/abhayalibre/v14/e3t5euGtX-Co5MNzeAOqinEY22_CrdZJyIU9BQ.woff2"
  },
  "Aboreto": {
    "400": "https://fonts.gstatic.com/s/aboreto/v2/5DCXAKLhwDDQ4N8bpKPUAk6t1Sc.woff2"
  },
  "Abril Fatface": {
    "400": "https://fonts.gstatic.com/s/abrilfatface/v19/zOL64pLDlL1D99S8g8PtiKchq-dmjcDidBc.woff2"
  },
  "Abyssinica SIL": {
    "400": "https://fonts.gstatic.com/s/abyssinicasil/v5/oY1H8ezOqK7iI3rK_45WKoc8J5UeDlK3AmuJ.woff2"
  },
  "Aclonica": {
    "400": "https://fonts.gstatic.com/s/aclonica/v18/K2FyfZJVlfNNSEBXGY7UAo-KBSLy.woff2"
  },
  "Acme": {
    "400": "https://fonts.gstatic.com/s/acme/v21/RrQfboBx-C5_XxrBbk_m3Lg.woff2"
  },
  "Actor": {
    "400": "https://fonts.gstatic.com/s/actor/v17/wEOzEBbCkc5cO0ejVSkPU9IP.woff2"
  },
  "Adamina": {
    "400": "https://fonts.gstatic.com/s/adamina/v21/j8_r6-DH1bjoc-dwi-3UEBt7Fns.woff2"
  },
  "Advent Pro": {
    "100": "https://fonts.gstatic.com/s/adventpro/v20/V8mqoQfxVT4Dvddr_yOwrzaFxV7JtdQgFqXdUAQrGp_zgX5sWCpLQyJ_S5ApvQhKBXYC.woff2",
    "200": "https://fonts.gstatic.com/s/adventpro/v20/V8mqoQfxVT4Dvddr_yOwrzaFxV7JtdQgFqXdUAQrGp_zgX5sWCpLwyN_S5ApvQhKBXYC.woff2",
    "300": "https://fonts.gstatic.com/s/adventpro/v20/V8mqoQfxVT4Dvddr_yOwrzaFxV7JtdQgFqXdUAQrGp_zgX5sWCpLHSN_S5ApvQhKBXYC.woff2",
    "400": "https://fonts.gstatic.com/s/adventpro/v20/V8mqoQfxVT4Dvddr_yOwrzaFxV7JtdQgFqXdUAQrGp_zgX5sWCpLQyN_S5ApvQhKBXYC.woff2",
    "500": "https://fonts.gstatic.com/s/adventpro/v20/V8mqoQfxVT4Dvddr_yOwrzaFxV7JtdQgFqXdUAQrGp_zgX5sWCpLcSN_S5ApvQhKBXYC.woff2",
    "600": "https://fonts.gstatic.com/s/adventpro/v20/V8mqoQfxVT4Dvddr_yOwrzaFxV7JtdQgFqXdUAQrGp_zgX5sWCpLnSR_S5ApvQhKBXYC.woff2",
    "700": "https://fonts.gstatic.com/s/adventpro/v20/V8mqoQfxVT4Dvddr_yOwrzaFxV7JtdQgFqXdUAQrGp_zgX5sWCpLpCR_S5ApvQhKBXYC.woff2",
    "800": "https://fonts.gstatic.com/s/adventpro/v20/V8mqoQfxVT4Dvddr_yOwrzaFxV7JtdQgFqXdUAQrGp_zgX5sWCpLwyR_S5ApvQhKBXYC.woff2",
    "900": "https://fonts.gstatic.com/s/adventpro/v20/V8mqoQfxVT4Dvddr_yOwrzaFxV7JtdQgFqXdUAQrGp_zgX5sWCpL6iR_S5ApvQhKBXYC.woff2",
    "100italic": "https://fonts.gstatic.com/s/adventpro/v20/V8mkoQfxVT4Dvddr_yOwhT-3Jr6w5kKOEbAVEvZiKGAr6BX29i1ei2CnDqArtwloAW4DgYg.woff2",
    "200italic": "https://fonts.gstatic.com/s/adventpro/v20/V8mkoQfxVT4Dvddr_yOwhT-3Jr6w5kKOEbAVEvZiKGAr6BX29i1ei2AnD6ArtwloAW4DgYg.woff2",
    "300italic": "https://fonts.gstatic.com/s/adventpro/v20/V8mkoQfxVT4Dvddr_yOwhT-3Jr6w5kKOEbAVEvZiKGAr6BX29i1ei2D5D6ArtwloAW4DgYg.woff2",
    "400italic": "https://fonts.gstatic.com/s/adventpro/v20/V8mkoQfxVT4Dvddr_yOwhT-3Jr6w5kKOEbAVEvZiKGAr6BX29i1ei2CnD6ArtwloAW4DgYg.woff2",
    "500italic": "https://fonts.gstatic.com/s/adventpro/v20/V8mkoQfxVT4Dvddr_yOwhT-3Jr6w5kKOEbAVEvZiKGAr6BX29i1ei2CVD6ArtwloAW4DgYg.woff2",
    "600italic": "https://fonts.gstatic.com/s/adventpro/v20/V8mkoQfxVT4Dvddr_yOwhT-3Jr6w5kKOEbAVEvZiKGAr6BX29i1ei2B5CKArtwloAW4DgYg.woff2",
    "700italic": "https://fonts.gstatic.com/s/adventpro/v20/V8mkoQfxVT4Dvddr_yOwhT-3Jr6w5kKOEbAVEvZiKGAr6BX29i1ei2BACKArtwloAW4DgYg.woff2",
    "800italic": "https://fonts.gstatic.com/s/adventpro/v20/V8mkoQfxVT4Dvddr_yOwhT-3Jr6w5kKOEbAVEvZiKGAr6BX29i1ei2AnCKArtwloAW4DgYg.woff2",
    "900italic": "https://fonts.gstatic.com/s/adventpro/v20/V8mkoQfxVT4Dvddr_yOwhT-3Jr6w5kKOEbAVEvZiKGAr6BX29i1ei2AOCKArtwloAW4DgYg.woff2"
  },
  "Aguafina Script": {
    "400": "https://fonts.gstatic.com/s/aguafinascript/v17/If2QXTv_ZzSxGIO30LemWEOmt1b3rcQooCQerw.woff2"
  },
  "Akaya Kanadaka": {
    "400": "https://fonts.gstatic.com/s/akayakanadaka/v16/N0bM2S5CPO5oOQqvazoRRb-8-MfWQZRjBjSE.woff2"
  },
  "Akaya Telivigala": {
    "400": "https://fonts.gstatic.com/s/akayatelivigala/v22/lJwc-oo_iG9wXqU3rCTD395tp0uiTdXXsaP3cH4.woff2"
  },
  "Akronim": {
    "400": "https://fonts.gstatic.com/s/akronim/v23/fdN-9sqWtWZZlHRpygd7kXQO6a4.woff2"
  },
  "Akshar": {
    "300": "https://fonts.gstatic.com/s/akshar/v9/Yq6I-LyHWTfz9rGoqDaUbHvhkAUsSSgF-9eS9qfpjPaaXg.woff2",
    "400": "https://fonts.gstatic.com/s/akshar/v9/Yq6I-LyHWTfz9rGoqDaUbHvhkAUsSXYF-9eS9qfpjPaaXg.woff2",
    "500": "https://fonts.gstatic.com/s/akshar/v9/Yq6I-LyHWTfz9rGoqDaUbHvhkAUsSUQF-9eS9qfpjPaaXg.woff2",
    "600": "https://fonts.gstatic.com/s/akshar/v9/Yq6I-LyHWTfz9rGoqDaUbHvhkAUsSagC-9eS9qfpjPaaXg.woff2",
    "700": "https://fonts.gstatic.com/s/akshar/v9/Yq6I-LyHWTfz9rGoqDaUbHvhkAUsSZEC-9eS9qfpjPaaXg.woff2"
  },
  "Aladin": {
    "400": "https://fonts.gstatic.com/s/aladin/v19/ZgNSjPJFPrvJV5fF7i35hmfmNw.woff2"
  },
  "Alata": {
    "400": "https://fonts.gstatic.com/s/alata/v9/PbytFmztEwbIoce9zqYzQ1OW.woff2"
  },
  "Alatsi": {
    "400": "https://fonts.gstatic.com/s/alatsi/v11/TK3iWkUJAxQ2nLN2GT8Gl-1PKw.woff2"
  },
  "Albert Sans": {
    "100": "https://fonts.gstatic.com/s/albertsans/v1/i7dZIFdwYjGaAMFtZd_QA3xXSKZqhr-TenSHq5LPq4f3bRUz17Zt.woff2",
    "200": "https://fonts.gstatic.com/s/albertsans/v1/i7dZIFdwYjGaAMFtZd_QA3xXSKZqhr-TenSHK5PPq4f3bRUz17Zt.woff2",
    "300": "https://fonts.gstatic.com/s/albertsans/v1/i7dZIFdwYjGaAMFtZd_QA3xXSKZqhr-TenSH9ZPPq4f3bRUz17Zt.woff2",
    "400": "https://fonts.gstatic.com/s/albertsans/v1/i7dZIFdwYjGaAMFtZd_QA3xXSKZqhr-TenSHq5PPq4f3bRUz17Zt.woff2",
    "500": "https://fonts.gstatic.com/s/albertsans/v1/i7dZIFdwYjGaAMFtZd_QA3xXSKZqhr-TenSHmZPPq4f3bRUz17Zt.woff2",
    "600": "https://fonts.gstatic.com/s/albertsans/v1/i7dZIFdwYjGaAMFtZd_QA3xXSKZqhr-TenSHdZTPq4f3bRUz17Zt.woff2",
    "700": "https://fonts.gstatic.com/s/albertsans/v1/i7dZIFdwYjGaAMFtZd_QA3xXSKZqhr-TenSHTJTPq4f3bRUz17Zt.woff2",
    "800": "https://fonts.gstatic.com/s/albertsans/v1/i7dZIFdwYjGaAMFtZd_QA3xXSKZqhr-TenSHK5TPq4f3bRUz17Zt.woff2",
    "900": "https://fonts.gstatic.com/s/albertsans/v1/i7dZIFdwYjGaAMFtZd_QA3xXSKZqhr-TenSHApTPq4f3bRUz17Zt.woff2",
    "100italic": "https://fonts.gstatic.com/s/albertsans/v1/i7dfIFdwYjGaAMFtZd_QA1Zeelmy79QJ1HOSY9AX7rf1ZxQR065sIcA.woff2",
    "200italic": "https://fonts.gstatic.com/s/albertsans/v1/i7dfIFdwYjGaAMFtZd_QA1Zeelmy79QJ1HOSY9CX77f1ZxQR065sIcA.woff2",
    "300italic": "https://fonts.gstatic.com/s/albertsans/v1/i7dfIFdwYjGaAMFtZd_QA1Zeelmy79QJ1HOSY9BJ77f1ZxQR065sIcA.woff2",
    "400italic": "https://fonts.gstatic.com/s/albertsans/v1/i7dfIFdwYjGaAMFtZd_QA1Zeelmy79QJ1HOSY9AX77f1ZxQR065sIcA.woff2",
    "500italic": "https://fonts.gstatic.com/s/albertsans/v1/i7dfIFdwYjGaAMFtZd_QA1Zeelmy79QJ1HOSY9Al77f1ZxQR065sIcA.woff2",
    "600italic": "https://fonts.gstatic.com/s/albertsans/v1/i7dfIFdwYjGaAMFtZd_QA1Zeelmy79QJ1HOSY9DJ6Lf1ZxQR065sIcA.woff2",
    "700italic": "https://fonts.gstatic.com/s/albertsans/v1/i7dfIFdwYjGaAMFtZd_QA1Zeelmy79QJ1HOSY9Dw6Lf1ZxQR065sIcA.woff2",
    "800italic": "https://fonts.gstatic.com/s/albertsans/v1/i7dfIFdwYjGaAMFtZd_QA1Zeelmy79QJ1HOSY9CX6Lf1ZxQR065sIcA.woff2",
    "900italic": "https://fonts.gstatic.com/s/albertsans/v1/i7dfIFdwYjGaAMFtZd_QA1Zeelmy79QJ1HOSY9C-6Lf1ZxQR065sIcA.woff2"
  },
  "Aldrich": {
    "400": "https://fonts.gstatic.com/s/aldrich/v17/MCoTzAn-1s3IGyJMVacY37H6D_A.woff2"
  },
  "Alef": {
    "400": "https://fonts.gstatic.com/s/alef/v21/FeVfS0NQpLYgnjVRCrNy1bQ.woff2",
    "700": "https://fonts.gstatic.com/s/alef/v21/FeVQS0NQpLYglo50H55Q2J5hm24.woff2"
  },
  "Alegreya": {
    "400": "https://fonts.gstatic.com/s/alegreya/v35/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNG9hU4-6qjkySFrt19.woff2",
    "500": "https://fonts.gstatic.com/s/alegreya/v35/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNGxBU4-6qjkySFrt19.woff2",
    "600": "https://fonts.gstatic.com/s/alegreya/v35/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNGKBI4-6qjkySFrt19.woff2",
    "700": "https://fonts.gstatic.com/s/alegreya/v35/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNGERI4-6qjkySFrt19.woff2",
    "800": "https://fonts.gstatic.com/s/alegreya/v35/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNGdhI4-6qjkySFrt19.woff2",
    "900": "https://fonts.gstatic.com/s/alegreya/v35/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNGXxI4-6qjkySFrt19.woff2",
    "400italic": "https://fonts.gstatic.com/s/alegreya/v35/4UaSrEBBsBhlBjvfkSLk3abBFkvpkARTPlbgv5qhmSWnqsV8_9Q.woff2",
    "500italic": "https://fonts.gstatic.com/s/alegreya/v35/4UaSrEBBsBhlBjvfkSLk3abBFkvpkARTPlbSv5qhmSWnqsV8_9Q.woff2",
    "600italic": "https://fonts.gstatic.com/s/alegreya/v35/4UaSrEBBsBhlBjvfkSLk3abBFkvpkARTPlY-uJqhmSWnqsV8_9Q.woff2",
    "700italic": "https://fonts.gstatic.com/s/alegreya/v35/4UaSrEBBsBhlBjvfkSLk3abBFkvpkARTPlYHuJqhmSWnqsV8_9Q.woff2",
    "800italic": "https://fonts.gstatic.com/s/alegreya/v35/4UaSrEBBsBhlBjvfkSLk3abBFkvpkARTPlZguJqhmSWnqsV8_9Q.woff2",
    "900italic": "https://fonts.gstatic.com/s/alegreya/v35/4UaSrEBBsBhlBjvfkSLk3abBFkvpkARTPlZJuJqhmSWnqsV8_9Q.woff2"
  },
  "Alegreya SC": {
    "400": "https://fonts.gstatic.com/s/alegreyasc/v25/taiOGmRtCJ62-O0HhNEa-Z6v2ZAbaqe-.woff2",
    "500": "https://fonts.gstatic.com/s/alegreyasc/v25/taiTGmRtCJ62-O0HhNEa-ZZc-oU2SKqUFmKC.woff2",
    "700": "https://fonts.gstatic.com/s/alegreyasc/v25/taiTGmRtCJ62-O0HhNEa-ZYU_IU2SKqUFmKC.woff2",
    "800": "https://fonts.gstatic.com/s/alegreyasc/v25/taiTGmRtCJ62-O0HhNEa-ZYI_4U2SKqUFmKC.woff2",
    "900": "https://fonts.gstatic.com/s/alegreyasc/v25/taiTGmRtCJ62-O0HhNEa-ZYs_oU2SKqUFmKC.woff2",
    "400italic": "https://fonts.gstatic.com/s/alegreyasc/v25/taiMGmRtCJ62-O0HhNEa-Z6q6ZIRbYW8HGo.woff2",
    "500italic": "https://fonts.gstatic.com/s/alegreyasc/v25/taiRGmRtCJ62-O0HhNEa-Z6q4WEyeKieEUCAFz8.woff2",
    "700italic": "https://fonts.gstatic.com/s/alegreyasc/v25/taiRGmRtCJ62-O0HhNEa-Z6q4Sk0eKieEUCAFz8.woff2",
    "800italic": "https://fonts.gstatic.com/s/alegreyasc/v25/taiRGmRtCJ62-O0HhNEa-Z6q4TU3eKieEUCAFz8.woff2",
    "900italic": "https://fonts.gstatic.com/s/alegreyasc/v25/taiRGmRtCJ62-O0HhNEa-Z6q4RE2eKieEUCAFz8.woff2"
  },
  "Alegreya Sans": {
    "100": "https://fonts.gstatic.com/s/alegreyasans/v24/5aUt9_-1phKLFgshYDvh6Vwt5Tldv21TpG1Lsw.woff2",
    "300": "https://fonts.gstatic.com/s/alegreyasans/v24/5aUu9_-1phKLFgshYDvh6Vwt5fFPqEp2i0VBuxM.woff2",
    "400": "https://fonts.gstatic.com/s/alegreyasans/v24/5aUz9_-1phKLFgshYDvh6Vwt7VptvWdUhm8.woff2",
    "500": "https://fonts.gstatic.com/s/alegreyasans/v24/5aUu9_-1phKLFgshYDvh6Vwt5alOqEp2i0VBuxM.woff2",
    "700": "https://fonts.gstatic.com/s/alegreyasans/v24/5aUu9_-1phKLFgshYDvh6Vwt5eFIqEp2i0VBuxM.woff2",
    "800": "https://fonts.gstatic.com/s/alegreyasans/v24/5aUu9_-1phKLFgshYDvh6Vwt5f1LqEp2i0VBuxM.woff2",
    "900": "https://fonts.gstatic.com/s/alegreyasans/v24/5aUu9_-1phKLFgshYDvh6Vwt5dlKqEp2i0VBuxM.woff2",
    "100italic": "https://fonts.gstatic.com/s/alegreyasans/v24/5aUv9_-1phKLFgshYDvh6Vwt7V9V3F1RrmppsRu6.woff2",
    "300italic": "https://fonts.gstatic.com/s/alegreyasans/v24/5aUo9_-1phKLFgshYDvh6Vwt7V9VFE9GiU9GmRGyBQ.woff2",
    "400italic": "https://fonts.gstatic.com/s/alegreyasans/v24/5aUt9_-1phKLFgshYDvh6Vwt7V9dv21TpG1Lsw.woff2",
    "500italic": "https://fonts.gstatic.com/s/alegreyasans/v24/5aUo9_-1phKLFgshYDvh6Vwt7V9VTE5GiU9GmRGyBQ.woff2",
    "700italic": "https://fonts.gstatic.com/s/alegreyasans/v24/5aUo9_-1phKLFgshYDvh6Vwt7V9VBEhGiU9GmRGyBQ.woff2",
    "800italic": "https://fonts.gstatic.com/s/alegreyasans/v24/5aUo9_-1phKLFgshYDvh6Vwt7V9VGEtGiU9GmRGyBQ.woff2",
    "900italic": "https://fonts.gstatic.com/s/alegreyasans/v24/5aUo9_-1phKLFgshYDvh6Vwt7V9VPEpGiU9GmRGyBQ.woff2"
  },
  "Alegreya Sans SC": {
    "100": "https://fonts.gstatic.com/s/alegreyasanssc/v23/mtGn4-RGJqfMvt7P8FUr0Q1j-Hf1DipV9QREH4h2Mw.woff2",
    "300": "https://fonts.gstatic.com/s/alegreyasanssc/v23/mtGm4-RGJqfMvt7P8FUr0Q1j-Hf1DuJH4iNhMKB8O-8.woff2",
    "400": "https://fonts.gstatic.com/s/alegreyasanssc/v23/mtGh4-RGJqfMvt7P8FUr0Q1j-Hf1Bkll9w5DPYo.woff2",
    "500": "https://fonts.gstatic.com/s/alegreyasanssc/v23/mtGm4-RGJqfMvt7P8FUr0Q1j-Hf1DrpG4iNhMKB8O-8.woff2",
    "700": "https://fonts.gstatic.com/s/alegreyasanssc/v23/mtGm4-RGJqfMvt7P8FUr0Q1j-Hf1DvJA4iNhMKB8O-8.woff2",
    "800": "https://fonts.gstatic.com/s/alegreyasanssc/v23/mtGm4-RGJqfMvt7P8FUr0Q1j-Hf1Du5D4iNhMKB8O-8.woff2",
    "900": "https://fonts.gstatic.com/s/alegreyasanssc/v23/mtGm4-RGJqfMvt7P8FUr0Q1j-Hf1DspC4iNhMKB8O-8.woff2",
    "100italic": "https://fonts.gstatic.com/s/alegreyasanssc/v23/mtGl4-RGJqfMvt7P8FUr0Q1j-Hf1BkxdljRGFY9UMedt.woff2",
    "300italic": "https://fonts.gstatic.com/s/alegreyasanssc/v23/mtGk4-RGJqfMvt7P8FUr0Q1j-Hf1BkxdXiZRMqp7Ge1lOQ.woff2",
    "400italic": "https://fonts.gstatic.com/s/alegreyasanssc/v23/mtGn4-RGJqfMvt7P8FUr0Q1j-Hf1BkxV9QREH4h2Mw.woff2",
    "500italic": "https://fonts.gstatic.com/s/alegreyasanssc/v23/mtGk4-RGJqfMvt7P8FUr0Q1j-Hf1BkxdBidRMqp7Ge1lOQ.woff2",
    "700italic": "https://fonts.gstatic.com/s/alegreyasanssc/v23/mtGk4-RGJqfMvt7P8FUr0Q1j-Hf1BkxdTiFRMqp7Ge1lOQ.woff2",
    "800italic": "https://fonts.gstatic.com/s/alegreyasanssc/v23/mtGk4-RGJqfMvt7P8FUr0Q1j-Hf1BkxdUiJRMqp7Ge1lOQ.woff2",
    "900italic": "https://fonts.gstatic.com/s/alegreyasanssc/v23/mtGk4-RGJqfMvt7P8FUr0Q1j-Hf1BkxddiNRMqp7Ge1lOQ.woff2"
  },
  "Aleo": {
    "300": "https://fonts.gstatic.com/s/aleo/v11/c4mg1nF8G8_syKbrxDJJn61_9KI.woff2",
    "400": "https://fonts.gstatic.com/s/aleo/v11/c4mv1nF8G8_swA3J0R9rkoc.woff2",
    "700": "https://fonts.gstatic.com/s/aleo/v11/c4mg1nF8G8_syLbsxDJJn61_9KI.woff2",
    "300italic": "https://fonts.gstatic.com/s/aleo/v11/c4mi1nF8G8_swAjxeDd5nad41qC3WQ.woff2",
    "400italic": "https://fonts.gstatic.com/s/aleo/v11/c4mh1nF8G8_swAj50xVssIV1_A.woff2",
    "700italic": "https://fonts.gstatic.com/s/aleo/v11/c4mi1nF8G8_swAjxaDB5nad41qC3WQ.woff2"
  },
  "Alex Brush": {
    "400": "https://fonts.gstatic.com/s/alexbrush/v22/SZc83FzrJKuqFbwMKk6EhUXz7RlNiCY.woff2"
  },
  "Alexandria": {
    "100": "https://fonts.gstatic.com/s/alexandria/v3/UMBCrPdDqW66y0Y2usFeQCH18mulUxBvI9r7T5bAFp4jQ70a32I.woff2",
    "200": "https://fonts.gstatic.com/s/alexandria/v3/UMBCrPdDqW66y0Y2usFeQCH18mulUxBvI9p7TpbAFp4jQ70a32I.woff2",
    "300": "https://fonts.gstatic.com/s/alexandria/v3/UMBCrPdDqW66y0Y2usFeQCH18mulUxBvI9qlTpbAFp4jQ70a32I.woff2",
    "400": "https://fonts.gstatic.com/s/alexandria/v3/UMBCrPdDqW66y0Y2usFeQCH18mulUxBvI9r7TpbAFp4jQ70a32I.woff2",
    "500": "https://fonts.gstatic.com/s/alexandria/v3/UMBCrPdDqW66y0Y2usFeQCH18mulUxBvI9rJTpbAFp4jQ70a32I.woff2",
    "600": "https://fonts.gstatic.com/s/alexandria/v3/UMBCrPdDqW66y0Y2usFeQCH18mulUxBvI9olSZbAFp4jQ70a32I.woff2",
    "700": "https://fonts.gstatic.com/s/alexandria/v3/UMBCrPdDqW66y0Y2usFeQCH18mulUxBvI9ocSZbAFp4jQ70a32I.woff2",
    "800": "https://fonts.gstatic.com/s/alexandria/v3/UMBCrPdDqW66y0Y2usFeQCH18mulUxBvI9p7SZbAFp4jQ70a32I.woff2",
    "900": "https://fonts.gstatic.com/s/alexandria/v3/UMBCrPdDqW66y0Y2usFeQCH18mulUxBvI9pSSZbAFp4jQ70a32I.woff2"
  },
  "Alfa Slab One": {
    "400": "https://fonts.gstatic.com/s/alfaslabone/v17/6NUQ8FmMKwSEKjnm5-4v-4Jh2dJhe_escmA.woff2"
  },
  "Alice": {
    "400": "https://fonts.gstatic.com/s/alice/v20/OpNCnoEEmtHa6GcOrg7-hCJ1.woff2"
  },
  "Alike": {
    "400": "https://fonts.gstatic.com/s/alike/v20/HI_EiYEYI6BIoHjGQ5TiQJ-c.woff2"
  },
  "Alike Angular": {
    "400": "https://fonts.gstatic.com/s/alikeangular/v20/3qTrojWunjGQtEBlIcwMbSoI7kQwbTzGOjA.woff2"
  },
  "Alkalami": {
    "400": "https://fonts.gstatic.com/s/alkalami/v7/zOL_4pfDmqRL95WXi6eMycFuuehG.woff2"
  },
  "Alkatra": {
    "400": "https://fonts.gstatic.com/s/alkatra/v3/r05EGLZA5qhCYsyJbuChFuK48Medzngmu4cIptH3f3xFYgQ.woff2",
    "500": "https://fonts.gstatic.com/s/alkatra/v3/r05EGLZA5qhCYsyJbuChFuK48MedzngUu4cIptH3f3xFYgQ.woff2",
    "600": "https://fonts.gstatic.com/s/alkatra/v3/r05EGLZA5qhCYsyJbuChFuK48Medznj4vIcIptH3f3xFYgQ.woff2",
    "700": "https://fonts.gstatic.com/s/alkatra/v3/r05EGLZA5qhCYsyJbuChFuK48MedznjBvIcIptH3f3xFYgQ.woff2"
  },
  "Allan": {
    "400": "https://fonts.gstatic.com/s/allan/v21/ea8XadU7WuTxEubxNdWn8WZF.woff2",
    "700": "https://fonts.gstatic.com/s/allan/v21/ea8aadU7WuTxEu5KEMCK02tvg1KV.woff2"
  },
  "Allerta": {
    "400": "https://fonts.gstatic.com/s/allerta/v18/TwMO-IAHRlkbx940YnYXSCiN9uc.woff2"
  },
  "Allerta Stencil": {
    "400": "https://fonts.gstatic.com/s/allertastencil/v18/HTx0L209KT-LmIE9N7OR6eiycOe1_Db29XP-vA.woff2"
  },
  "Allison": {
    "400": "https://fonts.gstatic.com/s/allison/v9/X7nl4b88AP2nkbvZCCGa4ebjEgg.woff2"
  },
  "Allura": {
    "400": "https://fonts.gstatic.com/s/allura/v19/9oRPNYsQpS4zjuA_iwgWHNn7GQ.woff2"
  },
  "Almarai": {
    "300": "https://fonts.gstatic.com/s/almarai/v12/tssoApxBaigK_hnnS_antnqWo4z1oXk.woff2",
    "400": "https://fonts.gstatic.com/s/almarai/v12/tsstApxBaigK_hnnQ1iFo1K0rqY.woff2",
    "700": "https://fonts.gstatic.com/s/almarai/v12/tssoApxBaigK_hnnS-agtnqWo4z1oXk.woff2",
    "800": "https://fonts.gstatic.com/s/almarai/v12/tssoApxBaigK_hnnS_qjtnqWo4z1oXk.woff2"
  },
  "Almendra": {
    "400": "https://fonts.gstatic.com/s/almendra/v23/H4ckBXKAlMnTn0CskxY9yL6SgK62.woff2",
    "700": "https://fonts.gstatic.com/s/almendra/v23/H4cjBXKAlMnTn0Cskx6G7au_oqOcaThr.woff2",
    "400italic": "https://fonts.gstatic.com/s/almendra/v23/H4ciBXKAlMnTn0CskxY4-LyYh4y0YzA.woff2",
    "700italic": "https://fonts.gstatic.com/s/almendra/v23/H4chBXKAlMnTn0CskxY48Ae9kqGWbhppHtk.woff2"
  },
  "Almendra Display": {
    "400": "https://fonts.gstatic.com/s/almendradisplay/v26/0FlPVOGWl1Sb4O3tETtADHRRlZhzbSjUTgWoz34.woff2"
  },
  "Almendra SC": {
    "400": "https://fonts.gstatic.com/s/almendrasc/v25/Iure6Yx284eebowr7hbyTaZOrLRi4mQ1.woff2"
  },
        "Texturina": {
          "100": "https://fonts.gstatic.com/s/texturina/v22/c4mM1nxpEtL3pXiAulRTkY-HGmNEX1b9NspjMwhAgliHhVrXy2eYG8Un0ZvAXkOCP94.woff2",
          "200": "https://fonts.gstatic.com/s/texturina/v22/c4mM1nxpEtL3pXiAulRTkY-HGmNEX1b9NspjMwhAgliHhVrXy2cYGsUn0ZvAXkOCP94.woff2",
          "300": "https://fonts.gstatic.com/s/texturina/v22/c4mM1nxpEtL3pXiAulRTkY-HGmNEX1b9NspjMwhAgliHhVrXy2fGGsUn0ZvAXkOCP94.woff2",
          "400": "https://fonts.gstatic.com/s/texturina/v22/c4mM1nxpEtL3pXiAulRTkY-HGmNEX1b9NspjMwhAgliHhVrXy2eYGsUn0ZvAXkOCP94.woff2",
          "500": "https://fonts.gstatic.com/s/texturina/v22/c4mM1nxpEtL3pXiAulRTkY-HGmNEX1b9NspjMwhAgliHhVrXy2eqGsUn0ZvAXkOCP94.woff2",
          "600": "https://fonts.gstatic.com/s/texturina/v22/c4mM1nxpEtL3pXiAulRTkY-HGmNEX1b9NspjMwhAgliHhVrXy2dGHcUn0ZvAXkOCP94.woff2",
          "700": "https://fonts.gstatic.com/s/texturina/v22/c4mM1nxpEtL3pXiAulRTkY-HGmNEX1b9NspjMwhAgliHhVrXy2d_HcUn0ZvAXkOCP94.woff2",
          "800": "https://fonts.gstatic.com/s/texturina/v22/c4mM1nxpEtL3pXiAulRTkY-HGmNEX1b9NspjMwhAgliHhVrXy2cYHcUn0ZvAXkOCP94.woff2",
          "900": "https://fonts.gstatic.com/s/texturina/v22/c4mM1nxpEtL3pXiAulRTkY-HGmNEX1b9NspjMwhAgliHhVrXy2cxHcUn0ZvAXkOCP94.woff2",
          "100italic": "https://fonts.gstatic.com/s/texturina/v22/c4mO1nxpEtL3pXiAulR5mL129FhZmLj7I4oiSUJyfYDu7sB5zHJQWR1i4ZnKX2GGJ9_How.woff2",
          "200italic": "https://fonts.gstatic.com/s/texturina/v22/c4mO1nxpEtL3pXiAulR5mL129FhZmLj7I4oiSUJyfYDu7sB5zHJQWZ1j4ZnKX2GGJ9_How.woff2",
          "300italic": "https://fonts.gstatic.com/s/texturina/v22/c4mO1nxpEtL3pXiAulR5mL129FhZmLj7I4oiSUJyfYDu7sB5zHJQWUNj4ZnKX2GGJ9_How.woff2",
          "400italic": "https://fonts.gstatic.com/s/texturina/v22/c4mO1nxpEtL3pXiAulR5mL129FhZmLj7I4oiSUJyfYDu7sB5zHJQWR1j4ZnKX2GGJ9_How.woff2",
          "500italic": "https://fonts.gstatic.com/s/texturina/v22/c4mO1nxpEtL3pXiAulR5mL129FhZmLj7I4oiSUJyfYDu7sB5zHJQWS9j4ZnKX2GGJ9_How.woff2",
          "600italic": "https://fonts.gstatic.com/s/texturina/v22/c4mO1nxpEtL3pXiAulR5mL129FhZmLj7I4oiSUJyfYDu7sB5zHJQWcNk4ZnKX2GGJ9_How.woff2",
          "700italic": "https://fonts.gstatic.com/s/texturina/v22/c4mO1nxpEtL3pXiAulR5mL129FhZmLj7I4oiSUJyfYDu7sB5zHJQWfpk4ZnKX2GGJ9_How.woff2",
          "800italic": "https://fonts.gstatic.com/s/texturina/v22/c4mO1nxpEtL3pXiAulR5mL129FhZmLj7I4oiSUJyfYDu7sB5zHJQWZ1k4ZnKX2GGJ9_How.woff2",
          "900italic": "https://fonts.gstatic.com/s/texturina/v22/c4mO1nxpEtL3pXiAulR5mL129FhZmLj7I4oiSUJyfYDu7sB5zHJQWbRk4ZnKX2GGJ9_How.woff2"
        },
        "Thasadith": {
          "400": "https://fonts.gstatic.com/s/thasadith/v9/mtG44_1TIqPYrd_f5R1ot0MV8ia-Fg.woff2",
          "700": "https://fonts.gstatic.com/s/thasadith/v9/mtG94_1TIqPYrd_f5R1gDGYA3wSzPExN8g.woff2",
          "400italic": "https://fonts.gstatic.com/s/thasadith/v9/mtG-4_1TIqPYrd_f5R1osnMX-CGcFEZF.woff2",
          "700italic": "https://fonts.gstatic.com/s/thasadith/v9/mtGj4_1TIqPYrd_f5R1osnus3TSxNktv8CxB.woff2"
        },
        "The Girl Next Door": {
          "400": "https://fonts.gstatic.com/s/thegirlnextdoor/v18/pe0zMJCIMIsBjFxqYBIcZ6_OI5oFHCY4ULF64aXU2Q.woff2"
        },
        "The Nautigal": {
          "400": "https://fonts.gstatic.com/s/thenautigal/v3/VdGZAZ8ZH51Lvng9fQV2bfKb4A9l8deO5A.woff2",
          "700": "https://fonts.gstatic.com/s/thenautigal/v3/VdGGAZ8ZH51Lvng9fQV2bfKTWypw3PWDzrkC7w.woff2"
        }
        
      };
    console.log("Font data loaded:", fontData); // Debugging line
    const fontFamilySelect = document.getElementById('font-family');

    Object.keys(fontData).forEach(font => {
        const option = document.createElement('option');
        option.value = font;
        option.textContent = font;
        fontFamilySelect.appendChild(option);
    });

    localStorage.setItem('fontData', JSON.stringify(fontData));
}


function updateFontWeights() {
    const fontFamilySelect = document.getElementById('font-family');
    const fontWeightSelect = document.getElementById('font-weight');
    const fontFamily = fontFamilySelect.value;

    const fontData = JSON.parse(localStorage.getItem('fontData')) || {};
    const variants = fontData[fontFamily] || {};

    fontWeightSelect.innerHTML = ''; // Clear previous options

    Object.keys(variants).forEach(variant => {
        const option = document.createElement('option');
        option.value = variant;
        option.textContent = variant;
        fontWeightSelect.appendChild(option);
    });
}

// Update editor styles based on user selection
function updateEditorStyle() {
    const fontFamily = document.getElementById('font-family').value;
    const fontWeight = document.getElementById('font-weight').value;
    const italic = document.getElementById('italic').checked;
    const editor = document.getElementById('editor');

    const fontData = JSON.parse(localStorage.getItem('fontData')) || {};
    const variants = fontData[fontFamily] || {};
    const fontUrl = variants[italic ? 'italic' : fontWeight] || variants[fontWeight];

    const fontLink = document.getElementById('font-link');
    fontLink.href = fontUrl || '';

    editor.style.fontFamily = fontFamily;
    editor.style.fontWeight = fontWeight || '400';
    editor.style.fontStyle = italic && variants['italic'] ? 'italic' : 'normal';

    saveState();
}

// Save editor state to local storage
function saveState() {
    const editor = document.getElementById('editor');
    const fontFamily = document.getElementById('font-family').value;
    const fontWeight = document.getElementById('font-weight').value;
    const italic = document.getElementById('italic').checked;

    localStorage.setItem('editorContent', editor.value);
    localStorage.setItem('fontFamily', fontFamily);
    localStorage.setItem('fontWeight', fontWeight);
    localStorage.setItem('italic', italic);
}

// Load editor state from local storage
function loadState() {
    const editorContent = localStorage.getItem('editorContent');
    const fontFamily = localStorage.getItem('fontFamily');
    const fontWeight = localStorage.getItem('fontWeight');
    const italic = localStorage.getItem('italic');

    if (editorContent) {
        document.getElementById('editor').value = editorContent;
    }
    if (fontFamily) {
        document.getElementById('font-family').value = fontFamily;
        updateFontWeights();
        document.getElementById('font-weight').value = fontWeight || '400';
        document.getElementById('italic').checked = italic === 'true';
        updateEditorStyle();
    }
}

// Save button click handler
document.getElementById('save-button').addEventListener('click', saveState);

// Reset button click handler
document.getElementById('reset-button').addEventListener('click', () => {
    document.getElementById('editor').value = '';
    document.getElementById('font-family').value = '';
    document.getElementById('font-weight').value = '';
    document.getElementById('italic').checked = false;

    // Clear font styles
    const fontLink = document.getElementById('font-link');
    fontLink.href = '';

    // Save empty state to local storage
    localStorage.removeItem('editorContent');
    localStorage.removeItem('fontFamily');
    localStorage.removeItem('fontWeight');
    localStorage.removeItem('italic');
});

// Event listeners for font changes
document.getElementById('font-family').addEventListener('change', () => {
    updateFontWeights();
    updateEditorStyle();
});

document.getElementById('font-weight').addEventListener('change', updateEditorStyle);
document.getElementById('italic').addEventListener('change', updateEditorStyle);
document.getElementById('editor').addEventListener('input', saveState);

// Initialize
loadFonts().then(() => {
    loadState();
});