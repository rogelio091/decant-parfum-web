export const expiredDate = (date: Date): Date => {
    const expirationDate = new Date(date);
    expirationDate.setSeconds(expirationDate.getSeconds() - 1);
    expirationDate.setHours(expirationDate.getHours() + 24);
    return expirationDate;
};

export const restoreDate = (date: Date): Date => {
    const expirationDate = new Date(date);
    expirationDate.setSeconds(expirationDate.getSeconds() + 1);
    expirationDate.setHours(expirationDate.getHours() - 24);
    return expirationDate;
};
