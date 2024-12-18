export const statusString = (status: number): string => {
    return status === 0
        ? 'Pendiente'
        : status === 1
        ? 'Autorizada'
        : 'Rechazada';
};
