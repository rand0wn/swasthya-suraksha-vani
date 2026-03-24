"use client";

import { Button } from "@/components/ui/button";
import * as React from "react";
import { useCallback, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useConversation } from "@elevenlabs/react";
import Image from "next/image";


async function requestMicrophonePermission() {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });
    return true;
  } catch {
    console.error("Microphone permission denied");
    return false;
  }
}

async function getSignedUrl(): Promise<string> {
  const response = await fetch("/api/signed-url");
  if (!response.ok) {
    throw Error("Failed to get signed url");
  }
  const data = await response.json();
  return data.signedUrl;
}

export function ConvAI() {
  const [micMuted, setMicMuted] = useState(false);
  const conversation = useConversation({
    micMuted,
    onConnect: () => {
      console.log("connected");
    },
    onDisconnect: () => {
      console.log("disconnected");
    },
    onError: error => {
      console.log(error);
      alert("An error occurred during the conversation");
    },
    onMessage: message => {
      console.log(message);
    }
  });

  async function startConversation() {
    const hasPermission = await requestMicrophonePermission();
    if (!hasPermission) {
      alert("No permission");
      return;
    }
    const signedUrl = await getSignedUrl();
    const conversationId = await conversation.startSession({
      signedUrl
    });
    console.log(conversationId);
  }


  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);


  return (
    <div className={"flex justify-center items-center gap-x-10"}>
      <Card className={"rounded-3xl bg-white/5 border-white/10 shadow-xl backdrop-blur"}>
        <CardContent>
          <CardHeader>
            <CardTitle className={"text-center py-2"}>
              {conversation.status === "connected"
                ? conversation.isSpeaking
                  ? `Agent is speaking`
                  : "Agent is listening"
                : "Disconnected"}
            </CardTitle>
            </CardHeader>
          <div className={"flex flex-col gap-y-4 text-center items-center"}>
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white/70 shadow-xl bg-white/90 ring-4 ring-orange-400/40">
              <Image
                src="/swasthya_didi.png"
                alt="Swasthya Didi"
                fill
                sizes="144px"
                unoptimized
                className="object-cover"
                priority
              />
            </div>

            <Button
              variant={"outline"}
              className={"rounded-full"}
              size={"lg"}
              disabled={
                conversation.status !== "disconnected"
              }
              onClick={startConversation}
            >
              Start conversation
            </Button>
            <Button
              variant={"outline"}
              className={"rounded-full"}
              size={"lg"}
              disabled={conversation.status === "disconnected"}
              onClick={stopConversation}
            >
              End conversation
            </Button>
            <Button
              variant="outline"
              className="rounded-full"
              size="lg"
              disabled={conversation.status === "disconnected"}
              onClick={() => setMicMuted(prev => !prev)}
            >
              {micMuted ? "Unmute mic" : "Mute mic"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
