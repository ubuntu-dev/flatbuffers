// automatically generated by the FlatBuffers compiler, do not modify
"use strict";
exports.__esModule = true;
exports["default"] = MyGame;
/**
 * @enum
 */
var MyGame;
(function (MyGame) {
    var Sample;
    (function (Sample) {
        (function (Color) {
            Color[Color["Red"] = 0] = "Red";
            Color[Color["Green"] = 1] = "Green";
            Color[Color["Blue"] = 2] = "Blue";
        })(Sample.Color || (Sample.Color = {}));
        var Color = Sample.Color;
    })(Sample = MyGame.Sample || (MyGame.Sample = {}));
})(MyGame = exports.MyGame || (exports.MyGame = {}));
/**
 * @enum
 */
(function (MyGame) {
    var Sample;
    (function (Sample) {
        (function (Equipment) {
            Equipment[Equipment["NONE"] = 0] = "NONE";
            Equipment[Equipment["Weapon"] = 1] = "Weapon";
        })(Sample.Equipment || (Sample.Equipment = {}));
        var Equipment = Sample.Equipment;
    })(Sample = MyGame.Sample || (MyGame.Sample = {}));
})(MyGame = exports.MyGame || (exports.MyGame = {}));
/**
 * @constructor
 */
(function (MyGame) {
    var Sample;
    (function (Sample) {
        var Vec3 = (function () {
            function Vec3() {
                /**
                 * @type {flatbuffers.ByteBuffer}
                 */
                this.bb = null;
                /**
                 * @type {number}
                 */
                this.bb_pos = 0;
                /**
                 * @param {number} i
                 * @param {flatbuffers.ByteBuffer} bb
                 * @returns {Vec3}
                 */
                this.__init = function (i, bb) {
                    this.bb_pos = i;
                    this.bb = bb;
                    return this;
                };
                /**
                 * @returns {number}
                 */
                this.x = function () {
                    return this.bb.readFloat32(this.bb_pos);
                };
                /**
                 * @returns {number}
                 */
                this.y = function () {
                    return this.bb.readFloat32(this.bb_pos + 4);
                };
                /**
                 * @returns {number}
                 */
                this.z = function () {
                    return this.bb.readFloat32(this.bb_pos + 8);
                };
            }
            return Vec3;
        }());
        /**
         * @param {flatbuffers.Builder} builder
         * @param {number} x
         * @param {number} y
         * @param {number} z
         * @returns {flatbuffers.Offset}
         */
        Vec3.createVec3 = function (builder, x, y, z) {
            builder.prep(4, 12);
            builder.writeFloat32(z);
            builder.writeFloat32(y);
            builder.writeFloat32(x);
            return builder.offset();
        };
        Sample.Vec3 = Vec3;
    })(Sample = MyGame.Sample || (MyGame.Sample = {}));
})(MyGame = exports.MyGame || (exports.MyGame = {}));
/**
 * @constructor
 */
(function (MyGame) {
    var Sample;
    (function (Sample) {
        var Monster = (function () {
            function Monster() {
                /**
                 * @type {flatbuffers.ByteBuffer}
                 */
                this.bb = null;
                /**
                 * @type {number}
                 */
                this.bb_pos = 0;
                /**
                 * @param {number} i
                 * @param {flatbuffers.ByteBuffer} bb
                 * @returns {Monster}
                 */
                this.__init = function (i, bb) {
                    this.bb_pos = i;
                    this.bb = bb;
                    return this;
                };
                /**
                 * @param {MyGame.Sample.Vec3=} obj
                 * @returns {MyGame.Sample.Vec3}
                 */
                this.pos = function (obj) {
                    var offset = this.bb.__offset(this.bb_pos, 4);
                    return offset ? (obj || new MyGame.Sample.Vec3).__init(this.bb_pos + offset, this.bb) : null;
                };
                /**
                 * @returns {number}
                 */
                this.mana = function () {
                    var offset = this.bb.__offset(this.bb_pos, 6);
                    return offset ? this.bb.readInt16(this.bb_pos + offset) : 150;
                };
                /**
                 * @returns {number}
                 */
                this.hp = function () {
                    var offset = this.bb.__offset(this.bb_pos, 8);
                    return offset ? this.bb.readInt16(this.bb_pos + offset) : 100;
                };
                /**
                 * @param {flatbuffers.Encoding=} optionalEncoding
                 * @returns {string|Uint8Array}
                 */
                this.name = function (optionalEncoding) {
                    var offset = this.bb.__offset(this.bb_pos, 10);
                    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
                };
                /**
                 * @param {number} index
                 * @returns {number}
                 */
                this.inventory = function (index) {
                    var offset = this.bb.__offset(this.bb_pos, 14);
                    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
                };
                /**
                 * @returns {number}
                 */
                this.inventoryLength = function () {
                    var offset = this.bb.__offset(this.bb_pos, 14);
                    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                };
                /**
                 * @returns {MyGame.Sample.Color}
                 */
                this.color = function () {
                    var offset = this.bb.__offset(this.bb_pos, 16);
                    return offset ? (this.bb.readInt8(this.bb_pos + offset)) : MyGame.Sample.Color.Blue;
                };
                /**
                 * @param {number} index
                 * @param {MyGame.Sample.Weapon=} obj
                 * @returns {MyGame.Sample.Weapon}
                 */
                this.weapons = function (index, obj) {
                    var offset = this.bb.__offset(this.bb_pos, 18);
                    return offset ? (obj || new MyGame.Sample.Weapon).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
                };
                /**
                 * @returns {number}
                 */
                this.weaponsLength = function () {
                    var offset = this.bb.__offset(this.bb_pos, 18);
                    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                };
                /**
                 * @returns {MyGame.Sample.Equipment}
                 */
                this.equippedType = function () {
                    var offset = this.bb.__offset(this.bb_pos, 20);
                    return offset ? (this.bb.readUint8(this.bb_pos + offset)) : MyGame.Sample.Equipment.NONE;
                };
                /**
                 * @param {flatbuffers.Table} obj
                 * @returns {?flatbuffers.Table}
                 */
                this.equipped = function (obj) {
                    var offset = this.bb.__offset(this.bb_pos, 22);
                    return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
                };
            }
            return Monster;
        }());
        /**
         * @param {flatbuffers.ByteBuffer} bb
         * @param {Monster=} obj
         * @returns {Monster}
         */
        Monster.getRootAsMonster = function (bb, obj) {
            return (obj || new Monster).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        };
        /**
         * @returns {Uint8Array}
         */
        Monster.inventoryArray = function () {
            var offset = this.bb.__offset(this.bb_pos, 14);
            return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
        };
        /**
         * @param {flatbuffers.Builder} builder
         */
        Monster.startMonster = function (builder) {
            builder.startObject(10);
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {flatbuffers.Offset} posOffset
         */
        Monster.addPos = function (builder, posOffset) {
            builder.addFieldStruct(0, posOffset, 0);
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {number} mana
         */
        Monster.addMana = function (builder, mana) {
            builder.addFieldInt16(1, mana, 150);
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {number} hp
         */
        Monster.addHp = function (builder, hp) {
            builder.addFieldInt16(2, hp, 100);
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {flatbuffers.Offset} nameOffset
         */
        Monster.addName = function (builder, nameOffset) {
            builder.addFieldOffset(3, nameOffset, 0);
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {flatbuffers.Offset} inventoryOffset
         */
        Monster.addInventory = function (builder, inventoryOffset) {
            builder.addFieldOffset(5, inventoryOffset, 0);
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {Array.<number>} data
         * @returns {flatbuffers.Offset}
         */
        Monster.createInventoryVector = function (builder, data) {
            builder.startVector(1, data.length, 1);
            for (var i = data.length - 1; i >= 0; i--) {
                builder.addInt8(data[i]);
            }
            return builder.endVector();
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {number} numElems
         */
        Monster.startInventoryVector = function (builder, numElems) {
            builder.startVector(1, numElems, 1);
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {MyGame.Sample.Color} color
         */
        Monster.addColor = function (builder, color) {
            builder.addFieldInt8(6, color, MyGame.Sample.Color.Blue);
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {flatbuffers.Offset} weaponsOffset
         */
        Monster.addWeapons = function (builder, weaponsOffset) {
            builder.addFieldOffset(7, weaponsOffset, 0);
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {Array.<flatbuffers.Offset>} data
         * @returns {flatbuffers.Offset}
         */
        Monster.createWeaponsVector = function (builder, data) {
            builder.startVector(4, data.length, 4);
            for (var i = data.length - 1; i >= 0; i--) {
                builder.addOffset(data[i]);
            }
            return builder.endVector();
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {number} numElems
         */
        Monster.startWeaponsVector = function (builder, numElems) {
            builder.startVector(4, numElems, 4);
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {MyGame.Sample.Equipment} equippedType
         */
        Monster.addEquippedType = function (builder, equippedType) {
            builder.addFieldInt8(8, equippedType, MyGame.Sample.Equipment.NONE);
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {flatbuffers.Offset} equippedOffset
         */
        Monster.addEquipped = function (builder, equippedOffset) {
            builder.addFieldOffset(9, equippedOffset, 0);
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @returns {flatbuffers.Offset}
         */
        Monster.endMonster = function (builder) {
            var offset = builder.endObject();
            return offset;
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {flatbuffers.Offset} offset
         */
        Monster.finishMonsterBuffer = function (builder, offset) {
            builder.finish(offset);
        };
        Sample.Monster = Monster;
    })(Sample = MyGame.Sample || (MyGame.Sample = {}));
})(MyGame = exports.MyGame || (exports.MyGame = {}));
/**
 * @constructor
 */
(function (MyGame) {
    var Sample;
    (function (Sample) {
        var Weapon = (function () {
            function Weapon() {
                /**
                 * @type {flatbuffers.ByteBuffer}
                 */
                this.bb = null;
                /**
                 * @type {number}
                 */
                this.bb_pos = 0;
                /**
                 * @param {number} i
                 * @param {flatbuffers.ByteBuffer} bb
                 * @returns {Weapon}
                 */
                this.__init = function (i, bb) {
                    this.bb_pos = i;
                    this.bb = bb;
                    return this;
                };
                /**
                 * @param {flatbuffers.Encoding=} optionalEncoding
                 * @returns {string|Uint8Array}
                 */
                this.name = function (optionalEncoding) {
                    var offset = this.bb.__offset(this.bb_pos, 4);
                    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
                };
                /**
                 * @returns {number}
                 */
                this.damage = function () {
                    var offset = this.bb.__offset(this.bb_pos, 6);
                    return offset ? this.bb.readInt16(this.bb_pos + offset) : 0;
                };
            }
            return Weapon;
        }());
        /**
         * @param {flatbuffers.ByteBuffer} bb
         * @param {Weapon=} obj
         * @returns {Weapon}
         */
        Weapon.getRootAsWeapon = function (bb, obj) {
            return (obj || new Weapon).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        };
        /**
         * @param {flatbuffers.Builder} builder
         */
        Weapon.startWeapon = function (builder) {
            builder.startObject(2);
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {flatbuffers.Offset} nameOffset
         */
        Weapon.addName = function (builder, nameOffset) {
            builder.addFieldOffset(0, nameOffset, 0);
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @param {number} damage
         */
        Weapon.addDamage = function (builder, damage) {
            builder.addFieldInt16(1, damage, 0);
        };
        /**
         * @param {flatbuffers.Builder} builder
         * @returns {flatbuffers.Offset}
         */
        Weapon.endWeapon = function (builder) {
            var offset = builder.endObject();
            return offset;
        };
        Sample.Weapon = Weapon;
    })(Sample = MyGame.Sample || (MyGame.Sample = {}));
})(MyGame = exports.MyGame || (exports.MyGame = {}));
