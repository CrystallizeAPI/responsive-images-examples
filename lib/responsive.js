export const screenXs = 500;
export const screenSm = 768;
export const screenMd = 1024;
export const screenLg = 1600;

export const screenXsMin = screenXs;
export const screenXsMax = screenSm - 1;

export const screenSmMin = screenSm;
export const screenSmMax = screenMd - 1;

export const screenMdMin = screenMd;
export const screenMdMax = screenLg - 1;

export const screenLgMin = screenLg;
export const screenLgMax = 1599;

// Ready made media queries
export const responsive = {
    xs: `@media (max-width: ${screenXsMax}px)`,
    smMax: `@media (max-width: 1200px)`,
    sm: `@media (min-width: ${screenSmMin}px) and (max-width: ${screenSmMax}px)`,
    smPlus: `@media (min-width: ${screenSmMin}px)`,
    md: `@media (min-width: ${screenMdMin}px) and (max-width: ${screenMdMax}px)`,
    mdPlus: `@media (min-width: ${screenMdMin}px)`,
    lg: `@media (min-width: ${screenLgMin}px)`
};

export const xs = `@media (max-width: ${screenXsMax}px)`;
export const sm = `@media (min-width: ${screenSmMin}px) and (max-width: ${screenSmMax}px)`;
export const smPlus = `@media (min-width: ${screenSmMin}px)`;
export const md = `@media (min-width: ${screenMdMin}px) and (max-width: ${screenMdMax}px)`;
export const mdPlus = `@media (min-width: ${screenMdMin}px)`;
export const lg = `@media (min-width: ${screenLgMin}px)`;