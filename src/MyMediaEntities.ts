///<reference path="../../ThingTransformer/static/types/TWBaseTypes.d.ts"/>

/**
 * Media lists can be used to include media entities in the projects.
 * A single media list contains references to multiple media entities.
 */
class MyMediaList extends MediaList {

    /**
     * Media entities are specified as properties on this class.
     * Their content is specified as an initializer representing
     * a path to the file whose content will be used.
     */
    @allow(Users.Administrator, Permission.ServiceInvoke)
    SaveIcon = '../assets/save.svg';

    /**
     * Each property becomes its own media entity. There are no restrictions
     * on the file extension supported for media entities, but note that
     * only certain data types may be used as actual images in thingworx.
     */
    @deny(Groups.Developers, Permission.ServiceInvoke)
    ErrorIcon = '../assets/error.png';
}