import { Injectable } from '@angular/core';

const pls = {
  "A": ["A#.NET", "A#(Axiom)", "A - 0 System", "A +", "A++", "ABAP", "ABC", "ABC ALGOL", "ABLE", "ABSET", "ABSYS", "ACC", "Accent", "Ace DASL", "ACL2", "ACT - III", "Action!", "ActionScript", "Ada", "Adenine", "Agda", "Agilent VEE", "Agora", "AIMMS", "Alef", "ALF", "ALGOL 58", "ALGOL 60", "ALGOL 68", "ALGOL W", "Alice", "Alma - 0", "AmbientTalk", "Amiga E", "AMOS", "AMPL", "APL", "AppleScript", "Arc", "ARexx", "Argus", "AspectJ", "Assembly language", "ATS", "Ateji PX", "AutoHotkey", "Autocoder", "AutoIt", "AutoLISP", "Averest", "AWK", "Axum"],
  "B": ["B", "Babbage", "Bash", "BASIC", "bc", "BCPL", "BeanShell", "Batch", "Bertrand", "BETA", "Bigwig", "Bistro", "BitC", "BLISS", "Blue", "Bon", "Boo", "Boomerang", "Bourne shell", "bash", "ksh", "BREW", "BPEL"],
  "C": ["C", "C--", "C++", "C#", "C/AL", "Caché ObjectScript", "C Shell", "Caml", "Candle", "Cayenne", "CDuce", "Cecil", "Cel", "Cesil", "Ceylon", "CFEngine", "CFML", "Cg", "Ch", "Chapel", "CHAIN", "Charity", "Charm", "Chef", "CHILL", "CHIP-8", "chomski", "ChucK", "CICS", "Cilk", "CL", "Claire", "Clarion", "Clean", "Clipper", "CLIST", "Clojure", "CLU", "CMS-2", "COBOL", "Cobra", "CODE", "CoffeeScript", "Cola", "ColdC", "ColdFusion", "COMAL", "COMIT", "Common Lisp", "COMPASS", "Component Pascal", "Converge", "Cool", "Coq", "Coral 66", "Corn", "CorVision", "COWSEL", "CPL", "csh", "CSP", "Csound", "CUDA", "Curl", "Curry", "Cyclone", "Cython"],
  "D": ["D", "DASL", "DASL", "Dart", "DataFlex", "Datalog", "DATATRIEVE", "dBase", "dc", "DCL", "Deesel", "Delphi", "DinkC", "DIBOL", "Dog", "Draco", "DRAKON", "Dylan", "DYNAMO"],
  "E": ["E", "E#", "Ease", "Easy PL/I", "EASYTRIEVE PLUS", "ECMAScript", "Edinburgh IMP", "EGL", "Eiffel", "ELAN", "Elixir", "Elm", "Emacs Lisp", "Emerald", "Epigram", "EPL", "Erlang", "es", "Escapade", "Escher", "ESPOL", "Esterel", "Etoys", "Euclid", "Euler", "Euphoria", "EXEC", "EXEC 2", "Executable UML"],
  "F": ["F", "F#", "Factor", "Falcon", "Fancy", "Fantom", "FAUST", "Felix", "Ferite", "FFP", "Fjölnir", "FL", "Flavors", "Flex", "FLOW-MATIC", "FOCAL", "FOCUS", "FOIL", "FORMAC", "@Formula", "Forth", "Fortran", "Fortress", "FoxBase", "FoxPro", "FP", "FPr", "Franz Lisp", "Frege", "F-Script", "FSProg"],
  "G": ["G", "Google Apps Script", "Game Maker Language", "GameMonkey Script", "GAMS", "GAP", "G-code", "Genie", "GDL", "Gibiane", "GJ", "GEORGE", "GLSL", "GNU E", "GM", "Go", "Go!", "GOAL", "Gödel", "Godiva", "GOM", "Goo", "Gosu", "GOTRAN", "GPSS", "GraphTalk", "GRASS", "Groovy"],
  "H": ["Hack", "HAL/S", "Hamilton C shell", "Harbour", "Hartmann", "Haskell", "Haxe", "HLSL", "Hop", "Hope", "Hugo", "Hume", "HyperTalk"],
  "I": ["IBM assembly", "IBM HAScript", "IBM Informix-4GL", "IBM RPG", "ICI", "Icon", "Id", "IDL", "Idris", "IMP", "Inform", "Io", "Ioke", "IPL", "IPTSCRAE", "ISLISP", "ISPF", "ISWIM"],
  "J": ["J", "J#", "J++", "JADE", "Jako", "JAL", "Janus", "JASS", "Java", "JavaScript", "JCL", "JEAN", "Join Java", "JOSS", "Joule", "JOVIAL", "Joy", "JScript", "JScript .NET", "JavaFX Script", "Julia", "Jython"],
  "K": ["K", "Kaleidoscope", "Karel", "Karel++", "KEE", "Kixtart", "KIF", "Kojo", "Kotlin", "KRC", "KRL", "KUKA", "KRYPTON", "ksh"],
  "L": ["L", "L# .NET", "LabVIEW", "Ladder", "Lagoona", "LANSA", "Lasso", "LaTeX", "Lava", "LC-3", "Leda", "Legoscript", "LIL", "LilyPond", "Limbo", "Limnor", "LINC", "Lingo", "Linoleum", "LIS", "LISA", "Lisaac", "Lisp", "Lite-C", "Lithe", "Little b", "Logo", "Logtalk", "LPC", "LSE", "LSL", "LiveCode", "LiveScript", "Lua", "Lucid", "Lustre", "LYaPAS", "Lynx"],
  "M": ["M2001", "M4", "Machine code", "MAD", "MAD/I", "Magik", "Magma", "make", "Maple", "MAPPER", "MARK-IV", "Mary", "Mathematica", "MATLAB", "Maxima", "Macsyma", "Max", "MaxScript", "Maya", "MDL", "Mercury", "Mesa", "Metacard", "Metafont", "MetaL", "Microcode", "MicroScript", "MIIS", "MillScript", "MIMIC", "Mirah", "Miranda", "MIVA Script", "ML", "Moby", "Model 204", "Modelica", "Modula", "Modula-2", "Modula-3", "Mohol", "MOO", "Mortran", "Mouse", "MPD", "CIL", "MSL", "MUMPS"],
  "N": ["NASM", "NATURAL", "Napier88", "Neko", "Nemerle", "nesC", "NESL", "Net.Data", "NetLogo", "NetRexx", "NewLISP", "NEWP", "Newspeak", "NewtonScript", "NGL", "Nial", "Nice", "Nickle", "Nim", "NPL", "Not eXactly C", "Not Quite C", "NSIS", "Nu", "NWScript", "NXT-G"],
  "O": ["o:XML", "Oak", "Oberon", "Obix", "OBJ2", "Object Lisp", "ObjectLOGO", "Object REXX", "Object Pascal", "Objective-C", "Objective-J", "Obliq", "Obol", "OCaml", "occam", "occam-π", "Octave", "OmniMark", "Onyx", "Opa", "Opal", "OpenCL", "OpenEdge ABL", "OPL", "OPS5", "OptimJ", "Orc", "ORCA/Modula-2", "Oriel", "Orwell", "Oxygene", "Oz"],
  "P": ["P#", "ParaSail", "PARI/GP", "Pascal", "Pawn", "PCASTL", "PCF", "PEARL", "PeopleCode", "Perl", "PDL", "PHP", "Phrogram", "Pico", "Picolisp", "Pict", "Pike", "PIKT", "PILOT", "Pipelines", "Pizza", "PL-11", "PL/0", "PL/B", "PL/C", "PL/I", "PL/M", "PL/P", "PL/SQL", "PL360", "PLANC", "Plankalkül", "Planner", "PLEX", "PLEXIL", "Plus", "POP-11", "PostScript", "PortablE", "Powerhouse", "PowerBuilder", "PowerShell", "PPL", "Processing", "Processing.js", "Prograph", "PROIV", "Prolog", "PROMAL", "Promela", "PROSE", "PROTEL", "ProvideX", "Pro*C", "Pure", "Python"],
  "Q": ["Q", "Qalb", "QtScript", "QuakeC", "QPL"],
  "R": ["R", "R++", "Racket", "RAPID", "Rapira", "Ratfiv", "Ratfor", "rc", "REBOL", "Red", "Redcode", "REFAL", "Reia", "Revolution", "rex", "REXX", "Rlab", "RobotC", "ROOP", "RPG", "RPL", "RSL", "RTL/2", "Ruby", "RuneScript", "Rust"],
  "S": ["S", "S2", "S3", "S-Lang", "S-PLUS", "SA-C", "SabreTalk", "SAIL", "SALSA", "SAM76", "SAS", "SASL", "Sather", "Sawzall", "SBL", "Scala", "Scheme", "Scilab", "Scratch", "Script.NET", "Sed", "Seed7", "Self", "SenseTalk", "SequenceL", "SETL", "Shift Script", "SIMPOL", "SIGNAL", "SiMPLE", "SIMSCRIPT", "Simula", "Simulink", "SISAL", "SLIP", "SMALL", "Smalltalk", "Small Basic", "SML", "Snap!", "SNOBOL", "SPITBOL", "Snowball", "SOL", "Span", "SPARK", "Speedcode", "SPIN", "SP/k", "SPS", "Squeak", "Squirrel", "SR", "S/SL", "Stackless Python", "Starlogo", "Strand", "Stata", "Stateflow", "Subtext", "SuperCollider", "SuperTalk", "Swift", "SYMPL", "SyncCharts", "SystemVerilog"],
  "T": ["T", "TACL", "TACPOL", "TADS", "TAL", "Tcl", "Tea", "TECO", "TELCOMP", "TeX", "TEX", "TIE", "Timber", "TMG", "Tom", "TOM", "Topspeed", "TPU", "Trac", "TTM", "T-SQL", "TTCN", "Turing", "TUTOR", "TXL", "TypeScript", "Turbo C++"],
  "U": ["Ubercode", "UCSD Pascal", "Umple", "Unicon", "Uniface", "UNITY", "Unix shell", "UnrealScript"],
  "V": ["Vala", "VBA", "VBScript", "Verilog", "VHDL", "Visual Basic", "Visual Basic .NET", "Visual DataFlex", "Visual DialogScript", "Visual Fortran", "Visual FoxPro", "Visual J++", "Visual J#", "Visual Objects", "Visual Prolog", "VSXu", "Vvvv"],
  "W": ["WATFIV, WATFOR", "WebDNA", "WebQL", "Windows PowerShell", "Winbatch", "Wolfram", "Wyvern"],
  "X": ["X++", "X#", "X10", "XBL", "XC", "XMOS architecture", "xHarbour", "XL", "Xojo", "XOTcl", "XPL", "XPL0", "XQuery", "XSB", "XSLT", "XPath", "Xtend"],
  "Y": ["Yorick", "YQL", "y1", "y2", "y3"],
  "Z": ["Z notation", "Zeno", "ZOPL", "ZPL", "zenos"]
};


@Injectable({
  providedIn: 'root'
})
export class ProgrammingLanguageService {

  constructor() {
  }

  getAllProgrammingLanguages(): {} {
    return pls;
  }

  getTotalPLs(): number {
    let len = 0;
    Object.keys(pls).forEach((l: string) => {
      // @ts-ignore
      len += pls[l].length;
    });
    return len;
  }
}
