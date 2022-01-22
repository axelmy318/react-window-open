export const copyStyles = (sourceDoc, targetDoc) => {
    let stylesToLoad = getStylesToLoad(sourceDoc, targetDoc)
  
    if(stylesToLoad.length > 0) {
      for(let i = 0; i < targetDoc.head.children.length; i++) {
        let child = targetDoc.head.children[i]
        if(child.nodeName === 'LINK' || child.nodeName === 'STYLE'){
          child.remove()
        }
      }
    
      stylesToLoad.forEach((styleSheet, id) => {
        if (styleSheet.cssRules) {
          // true for inline styles
          const newStyleEl = sourceDoc.createElement("style");
    
          Array.from(styleSheet.cssRules).forEach(cssRule => {
            newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
          });
    
          targetDoc.head.appendChild(newStyleEl);
        } else if (styleSheet.href) {
          // true for stylesheets loaded from a URL
          const newLinkEl = sourceDoc.createElement("link");
    
          newLinkEl.rel = "stylesheet";
          newLinkEl.href = styleSheet.href;
          targetDoc.head.appendChild(newLinkEl);
        }
      });
    }
  }
  
  //Check if the sourceDoc has more defined styles than the targetDoc
  export const getStylesToLoad = (sourceDoc, targetDoc) => {
    let sourceDocStylesheets = []
    let toLoad = []
  
    Array.from(sourceDoc.styleSheets).forEach((styleSheet) => sourceDocStylesheets.push(styleSheet))
  
    sourceDocStylesheets.forEach(styleSheet => {
      if(!Array.from(targetDoc.styleSheets).includes(styleSheet)) 
        toLoad.push(styleSheet)
    })
    
    return toLoad
  } 
  
  /*export const getUnloadedStyles = (sourceDoc, targetDoc) => {
  
  }*/
  