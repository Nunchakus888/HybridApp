//
//  mobileApiTest.m
//  HelloWorld
//
//  Created by Vincent on 5/28/15.
//
//

#import "mobileApiTest.h"

@implementation mobileApiTest

- (void)apiTest:(CDVInvokedUrlCommand*)command
{
    NSDictionary* deviceProperties = [self doSometing];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:deviceProperties];

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}


-(NSMutableDictionary*)doSometing
{
    NSMutableDictionary* tempDict = [NSMutableDictionary dictionary];
    return tempDict;
}

@end
