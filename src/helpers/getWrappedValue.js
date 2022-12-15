import { take, trim } from "lodash";

export const getWrappedValue = (str, lenght) => {
    const charArr = [...trim(str).replace(/\s+/g, ' ')];

    return charArr.length > lenght ? `${ take(charArr, lenght).join('') }...` : charArr.join('');
};
