const check = function () {
    console.log('Doing some work...now')
    }

const getName = () => {
        return 'Jim';
      };
      
exports.getName = getName;
exports.check = check();
