const collectiveWisdom = {
      signInfo: ['star', 'moon', 'sun', 'comet'],
      fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
      advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
};

const randomize = number => {
      return Math.floor(Math.random() * number);
};

let wisdom = [];

for (let i in collectiveWisdom) {
      let options = randomize(collectiveWisdom[i].length);

      switch(i) {
            case 'signInfo':
                  wisdom.push(`Your sign is: ${collectiveWisdom[i][options].toUpperCase()}`);
                        break;
            case 'fortuneOutput':
                  wisdom.push(`Your fortune now: ${collectiveWisdom[i][options].toUpperCase()}`);
                        break;
            case 'advice':
                  wisdom.push(`You should do: ${collectiveWisdom[i][options].toUpperCase()}`);
                        break;
            default:
                  wisdom.push(`There is not enough info.`);
      }
}

const formatting = input => {
      return wisdom.join('\n');
}

console.log(formatting(wisdom));
