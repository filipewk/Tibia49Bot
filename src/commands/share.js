function sharedExp(args) {
    const numberArgs = parseFloat(args);
    const lowLevelForm = Math.round((numberArgs * 0.666));
    const highestLevelForm = Math.round((numberArgs / 0.666));
    if (!parseFloat(args))
        return ':x: Somente números';
    return `O level **${numberArgs}** pode compartilhar experiência com os levels **${lowLevelForm}** to **${highestLevelForm}**.`;
}

exports.sharedExp = sharedExp;
