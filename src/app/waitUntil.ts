export const waitUntil = (canProceed: () => boolean): Promise<void> => {
    return new Promise((resolve) => {
        const isReady = () => {
            if (canProceed()) resolve();
            else {
                setTimeout(isReady, 100);
            }
        };
        isReady();
    });
};
export const waitUntilAsync = (canProceed: () => Promise<boolean>): Promise<void> => {
    return new Promise((resolve) => {
        const isReady = async () => {
            const proceed = await canProceed();
            if (proceed) resolve();
            else {
                setTimeout(isReady, 2000);
            }
        };
        isReady();
    });
};
