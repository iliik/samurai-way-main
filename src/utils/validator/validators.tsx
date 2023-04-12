import React from 'react';

export const required = (value: number) => {
    if (value) return undefined

    return 'Field is required '
}
export const maxLengthCreator = (maxLength: any) => (value: any) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`

    return undefined
}

