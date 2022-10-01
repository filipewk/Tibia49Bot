function rashidInfo() {
    const { convertToTimeZone } = require('date-fns-timezone/dist/convertToTimeZone')
    const date = new Date();
    const dateCest = convertToTimeZone(date, { timeZone: 'Europe/Berlin' });
    const hoursNow = dateCest.getHours();
    let dateNow = dateCest.getDay();

    if (hoursNow < 10)
        dateNow = (dateNow - 1);
    if (dateNow === -1)
        dateNow = 6;

    switch (dateNow) {
        case 0:
            return 'Você pode encontrá-lo no primeiro andar do depot de **Carlin**.';
            break;
        case 1:
            return 'Você pode encontrá-lo em **Svargrond**, na taverna de Dankwart, ao sul do templo.';
            break;
        case 2:
            return 'Você pode encontrá-lo em **Liberty Bay**, na taverna de Lyonel ao oeste do depot.';
            break;
        case 3:
            return 'Você pode encontrá-lo em **Port Hope**, na taverna de Clyde ao norte do barco.';
            break;
        case 4:
            return 'Você pode encontrá-lo em **Ankrahmun**, na taverna de Arito, acima do post office.';
            break;
        case 5:
            return 'Você pode encontrá-lo em **Darashia**, na taverna de Miraia, a oeste do barco.';
            break;
        case 6:
            return 'Você pode encontrá-lo em **Edron**, na taverna de Mirabell, acima do depot.';
            break;
    }
}

exports.rashidInfo = rashidInfo;
