import { useEffect, useRef } from "react";
import { cx } from "@/utils/cx";

export interface QRCodeProps {
    /** Data to encode in the QR code */
    value: string;
    /** Size of the QR code in pixels */
    size?: number;
    /** Background color */
    bgColor?: string;
    /** Foreground color */
    fgColor?: string;
    /** Error correction level */
    level?: "L" | "M" | "Q" | "H";
    /** Include margin */
    includeMargin?: boolean;
    /** Custom className */
    className?: string;
}

/**
 * QR Code Component
 *
 * A simple QR code generator component.
 * For production use, consider installing qrcode.react or qrcode library for better encoding.
 *
 * This is a simplified implementation that uses an external QR code generation service.
 * In a production environment, you should either:
 * 1. Install and use `qrcode.react` library
 * 2. Install and use `qrcode` library with canvas
 * 3. Use a self-hosted QR code generation service
 */
export const QRCode = ({
    value,
    size = 200,
    bgColor = "ffffff",
    fgColor = "000000",
    level = "M",
    includeMargin = true,
    className,
}: QRCodeProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // For now, we'll create a placeholder
        // In production, install qrcode library: npm install qrcode
        // Then use: QRCodeLib.toCanvas(canvasRef.current, value, { width: size })

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Draw a simple placeholder grid pattern
        const cellSize = size / 20;
        const margin = includeMargin ? cellSize : 0;

        // Background
        ctx.fillStyle = `#${bgColor}`;
        ctx.fillRect(0, 0, size, size);

        // Simple grid pattern (placeholder until real QR code library is added)
        ctx.fillStyle = `#${fgColor}`;
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                // Create a simple pattern based on the value
                const hash = value.charCodeAt(i % value.length) + i + j;
                if (hash % 3 === 0) {
                    ctx.fillRect(
                        margin + j * cellSize,
                        margin + i * cellSize,
                        cellSize * 0.9,
                        cellSize * 0.9
                    );
                }
            }
        }

        // Add corner markers (like real QR codes)
        const markerSize = cellSize * 5;
        const drawMarker = (x: number, y: number) => {
            // Outer square
            ctx.strokeStyle = `#${fgColor}`;
            ctx.lineWidth = cellSize;
            ctx.strokeRect(x, y, markerSize, markerSize);
            // Inner dot
            ctx.fillRect(x + cellSize * 2, y + cellSize * 2, cellSize, cellSize);
        };

        drawMarker(margin, margin); // Top-left
        drawMarker(size - markerSize - margin, margin); // Top-right
        drawMarker(margin, size - markerSize - margin); // Bottom-left

    }, [value, size, bgColor, fgColor, level, includeMargin]);

    return (
        <div className={cx("inline-block", className)}>
            <canvas
                ref={canvasRef}
                width={size}
                height={size}
                className="rounded-lg border border-border-secondary"
                aria-label={`QR Code for: ${value}`}
            />
            <div className="mt-2 text-center">
                <p className="text-xs text-fg-quaternary break-all">{value}</p>
                <p className="mt-1 text-xs text-fg-disabled">
                    ⚠️ Install qrcode library for production use
                </p>
            </div>
        </div>
    );
};

/**
 * To use a real QR code library, install it first:
 *
 * ```bash
 * npm install qrcode
 * npm install -D @types/qrcode
 * ```
 *
 * Then use this implementation instead:
 *
 * ```tsx
 * import { useEffect, useRef } from "react";
 * import QRCodeLib from "qrcode";
 *
 * export const QRCode = ({ value, size = 200, ... }: QRCodeProps) => {
 *   const canvasRef = useRef<HTMLCanvasElement>(null);
 *
 *   useEffect(() => {
 *     if (canvasRef.current) {
 *       QRCodeLib.toCanvas(canvasRef.current, value, {
 *         width: size,
 *         margin: includeMargin ? 2 : 0,
 *         color: {
 *           dark: `#${fgColor}`,
 *           light: `#${bgColor}`,
 *         },
 *         errorCorrectionLevel: level,
 *       });
 *     }
 *   }, [value, size, bgColor, fgColor, level, includeMargin]);
 *
 *   return <canvas ref={canvasRef} className={className} />;
 * };
 * ```
 */
