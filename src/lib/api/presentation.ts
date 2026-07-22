import {
  PresentationCustomization,
  PresentationResponse,
} from "@/types/presentation";



export async function updatePresentationCustomization(
  presentationId: string,
  customization: PresentationCustomization
) {
  const response = await fetch(
    `/api/presentations/${presentationId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customization),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to save presentation customization."
    );
  }

  return response.json();
}

export async function getPresentation(
  presentationId: string
): Promise<PresentationResponse> {
  const response = await fetch(
    `/api/presentations/${presentationId}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch presentation.");
  }

  return response.json();
}