var util=require("util"),argv=require("optimist").argv;argv.s&&util.print(argv.fr?"Le chat dit: ":"The cat says: "),console.log((argv.fr?"miaou":"meow")+(argv.p?".":""));