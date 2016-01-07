// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GeoLookup/nls/strings":{_widgetLabel:"GeoLookup",description:"\u039c\u03b5\u03c4\u03b1\u03b2\u03b5\u03af\u03c4\u03b5 \u03c3\u03b5 \u03ad\u03bd\u03b1 \u03ae \u03bc\u03b5\u03c4\u03b1\u03c6\u03ad\u03c1\u03b5\u03c4\u03b5 \u03ad\u03bd\u03b1 \x3ca href\x3d'./widgets/GeoLookup/data/sample.csv' tooltip\x3d'Download an example sheet' target\x3d'_blank'\x3e \u03c5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03b9\u03ba\u03cc \u03c6\u03cd\u03bb\u03bb\u03bf \x3c/a\x3e \u03c3\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03c3\u03b7\u03bc\u03b5\u03af\u03bf, \u03b3\u03b9\u03b1 \u03b1\u03c0\u03b5\u03b9\u03ba\u03cc\u03bd\u03b9\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03c0\u03c1\u03bf\u03c3\u03ac\u03c1\u03c4\u03b7\u03c3\u03b7 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd \u03c7\u03ac\u03c1\u03c4\u03b7 \u03c3\u03b5 \u03b1\u03c5\u03c4\u03cc.",
selectCSV:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 CSV",loadingCSV:"\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7 CSV",savingCSV:"CSVExport",clearResults:"\u0391\u03c0\u03b1\u03bb\u03bf\u03b9\u03c6\u03ae",downloadResults:"\u039b\u03ae\u03c8\u03b7",plotOnly:"\u039c\u03cc\u03bd\u03bf \u03c3\u03b7\u03bc\u03b5\u03af\u03b1 \u03c3\u03c7\u03b5\u03b4\u03af\u03b1\u03c3\u03b7\u03c2",plottingRows:"\u03a3\u03b5\u03b9\u03c1\u03ad\u03c2 \u03c3\u03c7\u03b5\u03b4\u03af\u03b1\u03c3\u03b7\u03c2",messages:"\u039c\u03b7\u03bd\u03cd\u03bc\u03b1\u03c4\u03b1",
error:{fetchingCSV:"\u03a3\u03c6\u03ac\u03bb\u03bc\u03b1 \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7 \u03bb\u03ae\u03c8\u03b7 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03c9\u03bd \u03b1\u03c0\u03cc \u03c4\u03bf\u03bd \u03c7\u03ce\u03c1\u03bf \u03b1\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7\u03c2 CSV: ${0}",fileIssue:"\u0394\u03b5\u03bd \u03ae\u03c4\u03b1\u03bd \u03b4\u03c5\u03bd\u03b1\u03c4\u03ae \u03b7 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u03c4\u03bf\u03c5 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5.",
notCSVFile:"\u03a0\u03c1\u03bf\u03c2 \u03c4\u03bf \u03c0\u03b1\u03c1\u03cc\u03bd \u03c5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03bc\u03cc\u03bd\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03b1 \u03b4\u03b9\u03b1\u03c7\u03c9\u03c1\u03b9\u03c3\u03bc\u03ad\u03bd\u03b1 \u03bc\u03b5 \u03ba\u03cc\u03bc\u03bc\u03b1\u03c4\u03b1 (.csv).",invalidCoord:"\u03a4\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1 \u03c4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c3\u03af\u03b1\u03c2 \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03ad\u03b3\u03ba\u03c5\u03c1\u03b1. \u0395\u03bb\u03ad\u03b3\u03be\u03c4\u03b5 \u03c4\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf .csv.",
tooManyRecords:"\u0394\u03c5\u03c3\u03c4\u03c5\u03c7\u03ce\u03c2, \u03c0\u03c1\u03bf\u03c2 \u03c4\u03bf \u03c0\u03b1\u03c1\u03cc\u03bd \u03b4\u03b5\u03bd \u03b5\u03c0\u03b9\u03c4\u03c1\u03ad\u03c0\u03bf\u03bd\u03c4\u03b1\u03b9 \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b5\u03c2 \u03b1\u03c0\u03cc ${0} \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ad\u03c2."},results:{csvLoaded:"\u03a6\u03bf\u03c1\u03c4\u03ce\u03b8\u03b7\u03ba\u03b1\u03bd ${0} \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ad\u03c2 \u03b1\u03c0\u03cc \u03c4\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf CSV",
recordsPlotted:"\u0395\u03bd\u03c4\u03bf\u03c0\u03af\u03c3\u03c4\u03b7\u03ba\u03b1\u03bd ${0}/${1} \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ad\u03c2 \u03c3\u03c4\u03bf\u03bd \u03c7\u03ac\u03c1\u03c4\u03b7",recordsEnriched:"\u0388\u03b3\u03b9\u03bd\u03b5 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 ${0}/${1}, \u03b5\u03bc\u03c0\u03bb\u03bf\u03c5\u03c4\u03af\u03c3\u03c4\u03b7\u03ba\u03b1\u03bd ${2} \u03b1\u03c0\u03cc ${3}",recordsError:"${0} \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ad\u03c2 \u03b5\u03af\u03c7\u03b1\u03bd \u03c3\u03c6\u03ac\u03bb\u03bc\u03b1\u03c4\u03b1",
recordsErrorList:"\u0397 \u03c3\u03b5\u03b9\u03c1\u03ac ${0} \u03b5\u03af\u03c7\u03b5 \u03ba\u03ac\u03c0\u03bf\u03b9\u03bf \u03c0\u03c1\u03cc\u03b2\u03bb\u03b7\u03bc\u03b1",label:"\u0391\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03b1 CSV"},_localized:{}}});