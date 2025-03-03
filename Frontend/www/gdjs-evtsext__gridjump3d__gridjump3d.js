
gdjs.evtsExt__GridJump3D__GridJump3D = gdjs.evtsExt__GridJump3D__GridJump3D || {};

/**
 * Behavior generated from 3D grid jump
 */
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D = class GridJump3D extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Object3D = behaviorData.Object3D !== undefined ? behaviorData.Object3D : "";
    this._behaviorData.TweenBehavior = behaviorData.TweenBehavior !== undefined ? behaviorData.TweenBehavior : "";
    this._behaviorData.JumpHeight = behaviorData.JumpHeight !== undefined ? behaviorData.JumpHeight : Number("70") || 0;
    this._behaviorData.GridСellSize = behaviorData.GridСellSize !== undefined ? behaviorData.GridСellSize : Number("100") || 0;
    this._behaviorData.JumpUpDuration = behaviorData.JumpUpDuration !== undefined ? behaviorData.JumpUpDuration : Number("0.12") || 0;
    this._behaviorData.JumpDownDuration = behaviorData.JumpDownDuration !== undefined ? behaviorData.JumpDownDuration : Number("0.08") || 0;
    this._behaviorData.RotateDuration = behaviorData.RotateDuration !== undefined ? behaviorData.RotateDuration : Number("0.1") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Object3D !== newBehaviorData.Object3D)
      this._behaviorData.Object3D = newBehaviorData.Object3D;
    if (oldBehaviorData.TweenBehavior !== newBehaviorData.TweenBehavior)
      this._behaviorData.TweenBehavior = newBehaviorData.TweenBehavior;
    if (oldBehaviorData.JumpHeight !== newBehaviorData.JumpHeight)
      this._behaviorData.JumpHeight = newBehaviorData.JumpHeight;
    if (oldBehaviorData.GridСellSize !== newBehaviorData.GridСellSize)
      this._behaviorData.GridСellSize = newBehaviorData.GridСellSize;
    if (oldBehaviorData.JumpUpDuration !== newBehaviorData.JumpUpDuration)
      this._behaviorData.JumpUpDuration = newBehaviorData.JumpUpDuration;
    if (oldBehaviorData.JumpDownDuration !== newBehaviorData.JumpDownDuration)
      this._behaviorData.JumpDownDuration = newBehaviorData.JumpDownDuration;
    if (oldBehaviorData.RotateDuration !== newBehaviorData.RotateDuration)
      this._behaviorData.RotateDuration = newBehaviorData.RotateDuration;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Object3D: this._behaviorData.Object3D,
    TweenBehavior: this._behaviorData.TweenBehavior,
    JumpHeight: this._behaviorData.JumpHeight,
    GridСellSize: this._behaviorData.GridСellSize,
    JumpUpDuration: this._behaviorData.JumpUpDuration,
    JumpDownDuration: this._behaviorData.JumpDownDuration,
    RotateDuration: this._behaviorData.RotateDuration,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Object3D !== undefined)
      this._behaviorData.Object3D = networkSyncData.props.Object3D;
    if (networkSyncData.props.TweenBehavior !== undefined)
      this._behaviorData.TweenBehavior = networkSyncData.props.TweenBehavior;
    if (networkSyncData.props.JumpHeight !== undefined)
      this._behaviorData.JumpHeight = networkSyncData.props.JumpHeight;
    if (networkSyncData.props.GridСellSize !== undefined)
      this._behaviorData.GridСellSize = networkSyncData.props.GridСellSize;
    if (networkSyncData.props.JumpUpDuration !== undefined)
      this._behaviorData.JumpUpDuration = networkSyncData.props.JumpUpDuration;
    if (networkSyncData.props.JumpDownDuration !== undefined)
      this._behaviorData.JumpDownDuration = networkSyncData.props.JumpDownDuration;
    if (networkSyncData.props.RotateDuration !== undefined)
      this._behaviorData.RotateDuration = networkSyncData.props.RotateDuration;
  }

  // Properties:
  
  _getObject3D() {
    return this._behaviorData.Object3D !== undefined ? this._behaviorData.Object3D : "";
  }
  _setObject3D(newValue) {
    this._behaviorData.Object3D = newValue;
  }
  _getTweenBehavior() {
    return this._behaviorData.TweenBehavior !== undefined ? this._behaviorData.TweenBehavior : "";
  }
  _setTweenBehavior(newValue) {
    this._behaviorData.TweenBehavior = newValue;
  }
  _getJumpHeight() {
    return this._behaviorData.JumpHeight !== undefined ? this._behaviorData.JumpHeight : Number("70") || 0;
  }
  _setJumpHeight(newValue) {
    this._behaviorData.JumpHeight = newValue;
  }
  _getGridСellSize() {
    return this._behaviorData.GridСellSize !== undefined ? this._behaviorData.GridСellSize : Number("100") || 0;
  }
  _setGridСellSize(newValue) {
    this._behaviorData.GridСellSize = newValue;
  }
  _getJumpUpDuration() {
    return this._behaviorData.JumpUpDuration !== undefined ? this._behaviorData.JumpUpDuration : Number("0.12") || 0;
  }
  _setJumpUpDuration(newValue) {
    this._behaviorData.JumpUpDuration = newValue;
  }
  _getJumpDownDuration() {
    return this._behaviorData.JumpDownDuration !== undefined ? this._behaviorData.JumpDownDuration : Number("0.08") || 0;
  }
  _setJumpDownDuration(newValue) {
    this._behaviorData.JumpDownDuration = newValue;
  }
  _getRotateDuration() {
    return this._behaviorData.RotateDuration !== undefined ? this._behaviorData.RotateDuration : Number("0.1") || 0;
  }
  _setRotateDuration(newValue) {
    this._behaviorData.RotateDuration = newValue;
  }
}

/**
 * Shared data generated from 3D grid jump
 */
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.SharedData = class GridJump3DSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._GridJump3D_GridJump3DSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._GridJump3D_GridJump3DSharedData = new gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.SharedData(
      initialData
    );
  }
  return instanceContainer._GridJump3D_GridJump3DSharedData;
}

// Methods:
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtSnappedAngleContext = {};
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtSnappedAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtSnappedAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtSnappedAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtSnappedAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtSnappedAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtSnappedAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JumpAtAngle(Math.round(eventsFunctionContext.getArgument("Angle") / 90) * 90, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtSnappedAngle = function(Angle, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "TweenBehavior": this._getTweenBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GridJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GridJump3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Angle") return Angle;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtSnappedAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtSnappedAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtSnappedAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtSnappedAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtSnappedAngleContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext = {};
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.asyncCallback14884028 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Object"), gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).addObjectPositionZTween2(eventsFunctionContext.getBehaviorName("Object3D"), "GridJump3DExtension.Jump", eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), "easeInQuad", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpDownDuration(), false);
}
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1) asyncObjectsList.addObject("Object", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpUpDuration()), (runtimeScene) => (gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.asyncCallback14884028(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("InitialZ", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).addObjectAngleTween2("GridJump3DExtension.Rotate", eventsFunctionContext.getArgument("Angle"), "linear", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotateDuration(), false);
}
}{for(var i = 0, len = gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).addObjectPositionTween2("GridJump3DExtension.Move", Math.round((gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1[i].getX()) + gdjs.evtTools.common.getXFromAngleAndDistance(eventsFunctionContext.getArgument("Angle"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGridСellSize())), Math.round((gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1[i].getY()) + gdjs.evtTools.common.getYFromAngleAndDistance(eventsFunctionContext.getArgument("Angle"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGridСellSize())), "linear", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpUpDuration() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpDownDuration(), false);
}
}{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()));
}{for(var i = 0, len = gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).addObjectPositionZTween2(eventsFunctionContext.getBehaviorName("Object3D"), "GridJump3DExtension.Jump", (gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpHeight(), "easeOutQuad", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpUpDuration(), false);
}
}
{ //Subevents
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).isPlaying("GridJump3DExtension.Move")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1[k] = gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngle = function(Angle, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "TweenBehavior": this._getTweenBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GridJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GridJump3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Angle") return Angle;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.JumpAtAngleContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.RotateContext = {};
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.RotateContext.GDObjectObjects1= [];
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.RotateContext.GDObjectObjects2= [];


gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.RotateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.RotateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.RotateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.RotateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).addObjectAngleTween2("GridJump3DExtension.Rotate", Math.round(eventsFunctionContext.getArgument("Angle") / 90) * 90, "linear", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotateDuration(), false);
}
}}

}


};

gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.Rotate = function(Angle, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "TweenBehavior": this._getTweenBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GridJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GridJump3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Angle") return Angle;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.RotateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.RotateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.RotateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.RotateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.RotateContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("GridJump3D::GridJump3D", gdjs.evtsExt__GridJump3D__GridJump3D.GridJump3D);
