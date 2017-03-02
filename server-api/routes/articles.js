'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');

//Credit: sample content below is from Wikipedia
let nextid = 21;
let articles = {
  1: { id: 1, title: `C`, text: `C is a general-purpose, imperative computer programming language, supporting structured programming, lexical variable scope and recursion, while a static type system prevents many unintended operations. By design, C provides constructs that map efficiently to typical machine instructions, and therefore it has found lasting use in applications that had formerly been coded in assembly language, including operating systems, as well as various application software for computers ranging from supercomputers to embedded systems.` },
  2: { id: 2, title: `C#`, text: `C# (pronounced as see sharp) is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. It was developed by Microsoft within its .NET initiative and later approved as a standard by Ecma (ECMA-334) and ISO (ISO/IEC 23270:2006). C# is one of the programming languages designed for the Common Language Infrastructure. C# is a general-purpose, object-oriented programming language.[12] Its development team is led by Anders Hejlsberg. The most recent version is C# 6.0 which was released in 2015.[13]` },
  3: { id: 3, title: `C++`, text: `C++ (pronounced cee plus plus) is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation. It was designed with a bias toward system programming and embedded, resource-constrained and large systems, with performance, efficiency and flexibility of use as its design highlights.[5] C++ has also been found useful in many other contexts, with key strengths being software infrastructure and resource-constrained applications,[5] including desktop applications, servers (e.g. e-commerce, web search or SQL servers), and performance-critical applications (e.g. telephone switches or space probes).[6] C++ is a compiled language, with implementations of it available on many platforms and provided by various organizations, including the Free Software Foundation (FSF's GCC), LLVM, Microsoft, Intel and IBM.` },
  4: { id: 4, title: `CSS`, text: `Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.[1] Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.[2]` },
  5: { id: 5, title: `HTML`, text: `HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.[1] Web browsers receive HTML documents from a webserver or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.` },
  6: { id: 6, title: `Java`, text: `Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented,[14] and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA),[15] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.[16] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture. As of 2016, Java is one of the most popular programming languages in use,[17][18][19][20] particularly for client-server web applications, with a reported 9 million developers.[21] Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in 1995 as a core component of Sun Microsystems' Java platform. The language derives much of its syntax from C and C++, but it has fewer low-level facilities than either of them.` },
  7: { id: 7, title: `JavaScript`, text: `JavaScript is a high-level, dynamic, untyped, and interpreted programming language.[7] It has been standardized in the ECMAScript language specification.[8] Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins.[7] JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented,[9] imperative, and functional programming styles.[7] It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded.[8]` },
  8: { id: 8, title: `Perl`, text: `Perl is a family of high-level, general-purpose, interpreted, dynamic programming languages. The languages in this family include Perl 5 and Perl 6.[7] Though Perl is not officially an acronym, [8] there are various backronyms in use, the best- known being "Practical Extraction and Reporting Language".[9] Perl was originally developed by Larry Wall in 1987 as a general-purpose Unix scripting language to make report processing easier.[10] Since then, it has undergone many changes and revisions. Perl 6, which began as a redesign of Perl 5 in 2000, eventually evolved into a separate language.Both languages continue to be developed independently by different development teams and liberally borrow ideas from one another.` },
  9: { id: 9, title: `PHP`, text: `PHP is a server-side scripting language designed primarily for web development but also used as a general-purpose programming language. Originally created by Rasmus Lerdorf in 1994,[4] the PHP reference implementation is now produced by The PHP Development Team.[5] PHP originally stood for Personal Home Page,[4] but it now stands for the recursive acronym PHP: Hypertext Preprocessor.[6]` },
  10: { id: 10, title: `Python`, text: `Python is a widely used high-level programming language for general-purpose programming, created by Guido van Rossum and first released in 1991. An interpreted language, Python has a design philosophy which emphasizes code readability (notably using whitespace indentation to delimit code blocks rather than curly braces or keywords), and a syntax which allows programmers to express concepts in fewer lines of code than possible in languages such as C++ or Java.[22][23] The language provides constructs intended to enable writing clear programs on both a small and large scale.[24]` },
  11: { id: 11, title: `Ruby`, text: `Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, and Lisp.[11] It supports multiple programming paradigms, including functional, object-oriented, and imperative.It also has a dynamic type system and automatic memory management.` },
  12: { id: 12, title: `Swift`, text: `Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, macOS, watchOS, tvOS, and Linux. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks and the large body of extant Objective-C (ObjC) code written for Apple products. Swift is intended to be more resilient to erroneous code ("safer") than Objective-C, and more concise. It is built with the LLVM compiler framework included in Xcode 6 and later and, on platforms other than Linux,[11] uses the Objective-C runtime library, which allows C, Objective-C, C++ and Swift code to run within one program.[12]` },
};

const DELAY = 250;
function delayedSend(res, data) {
  setTimeout(() => res.send(data), DELAY);
}

router.get('/', function(req, res, next) {
  delayedSend(res, _.values(articles));
});

router.get('/:id', function (req, res, next) {
  let id = parseInt(req.params.id);
  
  delayedSend(res, articles[id]);
});

router.post('/', function (req, res, next) {
  let article = req.body;
  let id = nextid++;

  article.id = id;
  articles[id] = article;

  delayedSend(res, article);
});

router.put('/:id', function (req, res, next) {
  let id = parseInt(req.params.id);
  let article = req.body;

  article.id = id;
  articles[id] = article;
  
  delayedSend(res, article);
});

router.delete('/:id', function (req, res, next) {
  let id = parseInt(req.params.id);
  
  delete articles[id];
  
  delayedSend(res, '');
});


module.exports = router;
