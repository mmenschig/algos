function bouncer(arr) {

  return arr.filter(function(v) {
      return !!v;
  });

    // Alternatively we could use the Boolean constructor
    // and avoid using a callback
    // return arr.filter(Boolean);

}

bouncer([7, "ate", "", false, 9]);