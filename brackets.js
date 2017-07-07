function braces(entries) {


  const isMirror = (entry) => {
    //initial auto true situations:
    //  entry is empty
    if (entry.length === 0) return true;

    //initial auto false situations:
    //  there are an odd number of characters
    if (entry.length % 2 !== 0) return false;
    //  the first character is not an opening bracket
    if (entry[0] !== ('(' || '[' || '{')) return false;

    //find the index of the closing bracket
    


    console.log(entry);
    return true;
  };

  //for each input, run the test and log 'YES' or 'NO'
  for (let i = 0; i < entries.length; i ++) {
    if (isMirror(entries[i])) {
      console.log('YES');
    } else console.log('NO');
  };
};

var entries = ['}{}{(([])))}']

braces(entries);
